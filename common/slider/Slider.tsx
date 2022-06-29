import React,{useEffect, useRef, useState, Children} from "react"
import {CustomSlider, SliderWrapper, SliderSlide} from "./SliderStyle"
import {SliderProps} from './Slider.interface'

let sliderIsDragging = false;
let isMouseDown = false;

function useWindowWidth(): number {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth(): void {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

const Slider = ({children}: SliderProps): JSX.Element => {
  const windowWidth = useWindowWidth()
  const [pairOfXCoords,setPairOfXCoords] = useState([0,0])
  // разница между 2 и 1 координатами всегда передаётся в translateX
  const [sliderWrapperWidth,setSliderWrapperWidth] = useState(0)
  const [contentWidth,setContentWidth]=useState(0)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const sliderSlideRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    let mouseUpDocHandler = (): void => {
      if(isMouseDown){
        isMouseDown=false
        onMouseUpOutsideTheSlider()
      }
    };
    document.addEventListener('mouseup', mouseUpDocHandler)
    return () => {document.removeEventListener('mouseup', mouseUpDocHandler)}
  },[pairOfXCoords])

  useEffect(() => {
    setSliderWrapperWidth(sliderWrapperRef.current?.clientWidth);
    setPairOfXCoords([0,0]) 
  },[windowWidth])

  useEffect(() => {
    setContentWidth(sliderSlideRef.current?.clientWidth*Children.count(children))
    setSliderWrapperWidth(sliderWrapperRef.current?.clientWidth)
  },[children])


  function onSliderStartMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = pairOfXCoords[0] + curX
    newPairOfXs[1] = curX
    if(newPairOfXs[1] - newPairOfXs[0] <= 0)
      if(contentWidth > sliderWrapperWidth)
        if(Math.abs(newPairOfXs[1] - newPairOfXs[0]) < contentWidth-sliderWrapperWidth)
          setPairOfXCoords(newPairOfXs)
  }

  function onSliderMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = pairOfXCoords[0]//берём точку вначале движения
    newPairOfXs[1] = curX
    if(newPairOfXs[1] - newPairOfXs[0] <= 0 )
    // первое условие- стоп на левой границе, второе и третье - на правой
      if(contentWidth > sliderWrapperWidth)
        if(Math.abs(newPairOfXs[1] - newPairOfXs[0]) < contentWidth - sliderWrapperWidth)
          setPairOfXCoords(newPairOfXs)      
  }

  function onSliderEndMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = -(curX-pairOfXCoords[0])
    // перекладываем разницу в начальный x для дальнейшего учёта начальной точки
    newPairOfXs[1] = 0
    if(newPairOfXs[1] - newPairOfXs[0] <= 0){
      // разница newPairOfXs[1]-newPairOfXs[0] по модулю описывает насколько 
      // необходимо передвинуть блок с контентом (упражнениями например) 
      // знак указывает на направление передвижения
      if((contentWidth > sliderWrapperWidth) && (Math.abs(newPairOfXs[1] - newPairOfXs[0]) < contentWidth - sliderWrapperWidth)){
        setPairOfXCoords(newPairOfXs)
        //добавляем новую координату 
        //и перекладываем разницу в начальную точку
      }else{
        // правая граница контента появилась внутри контейнера,
        // поэтому не двигаем, то есть не добавляем новую координату
        // просто перекладываем разницу в начальную точку
        newPairOfXs[0] = -(pairOfXCoords[1]-pairOfXCoords[0])
        newPairOfXs[1] = 0
        setPairOfXCoords(newPairOfXs)
      }
    } else{
      setPairOfXCoords([0,0])
    }
  }

  function onMouseUpOutsideTheSlider(): void {
    let newPairOfXs : number[] = []
    newPairOfXs[0] = -(pairOfXCoords[1]-pairOfXCoords[0])
    newPairOfXs[1] = 0
    setPairOfXCoords(newPairOfXs)
  }

  const onTouchStartHandler = (evt:React.TouchEvent<HTMLDivElement>) => {
    onSliderStartMove(evt.changedTouches[0].clientX);
  }

  const onTouchHandler = (evt:React.TouchEvent<HTMLDivElement>) => {
    onSliderMove(evt.changedTouches[0].clientX)
  }
  
  const onTouchEndHandler = (evt:React.TouchEvent<HTMLDivElement>) => {
    onSliderEndMove(evt.changedTouches[0].clientX)
  }

  const onMouseDown = (evt:React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault()
    isMouseDown = true
    onSliderStartMove(evt.clientX)
  }

  const onMouseMove = (evt:React.MouseEvent<HTMLDivElement>) => {
    if(isMouseDown){
      onSliderMove(evt.clientX)
      sliderIsDragging = true
    }
  }
  
  const onMouseUp = (evt:React.MouseEvent<HTMLDivElement>)=>{
    isMouseDown=false
    evt.stopPropagation()
    onSliderEndMove(evt.clientX)
  }

  const onClickCapture = (evt:React.UIEvent<HTMLDivElement>)=>{
    if(sliderIsDragging){
      evt.stopPropagation()
      sliderIsDragging=false
    }    
  }
  
  const slides = React.Children.map(children, (child, index)=>{
    if(index===0)
      return <SliderSlide ref={sliderSlideRef}>{child}</SliderSlide>
    else
      return <SliderSlide>{child}</SliderSlide>
  })

  return(
    <CustomSlider>
      <SliderWrapper
        ref={sliderWrapperRef}
        onDragStart={()=>{return false}}
        onMouseDown={(e)=>{onMouseDown(e)}}
        onMouseUp={(e)=>{onMouseUp(e)}}
        onClickCapture={(e)=>{onClickCapture(e)}}
        onMouseMove={(e)=>{onMouseMove(e)}}
        onTouchStart={(evt)=>{onTouchStartHandler(evt)}}
        onTouchMove={(e)=>{onTouchHandler(e)}}
        onTouchEnd={(evt)=>{onTouchEndHandler(evt)}}          
        style={{transform: `translateX(${(pairOfXCoords[1]-pairOfXCoords[0])}px)`, transitionDuration: '0ms'}}>
        {slides}         
      </SliderWrapper>
    </CustomSlider>    
  )
}
export default Slider