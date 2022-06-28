import React,{useEffect, useRef, useState, Children} from "react"
import {CustomSlider, SliderWrapper, SliderSlide} from "./SliderStyle"

let sliderIsDragging=false;
let isMouseDown=false;
let allCardsWidth;

function useWindowSize() {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Slider = ({children}) => {
  const windowWidth = useWindowSize()
  const [pairOfXs,setPairOfXs] = useState([0,0])
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0)
  const sliderWrapper = useRef(null)
  const sliderSlide = useRef(null)
  
  useEffect(()=>{
    let mouseUpDocHandler=(evt)=>{
      console.log("document listener has worked")
      isMouseDown=false
      onPressedMouseOutsideTheSlider()
    };
    document.addEventListener('mouseup', mouseUpDocHandler)
    return ()=>{document.removeEventListener('mouseup', mouseUpDocHandler)}
  },[pairOfXs])

  useEffect(()=>{
    setSliderWrapperWidth(sliderWrapper.current?.clientWidth);
    setPairOfXs([0,0]) 
  },[windowWidth])

  useEffect(()=>{
    allCardsWidth = sliderSlide.current?.clientWidth*Children.count(children)
    setSliderWrapperWidth(sliderWrapper.current?.clientWidth)
  },[sliderSlide,sliderWrapper,children])

  function onSliderStartMove(evt){
    let curX=evt.clientX
    let newPairOfXs=[]
    newPairOfXs[0] = pairOfXs[0] + curX
    newPairOfXs[1] = curX
    if(newPairOfXs[1]-newPairOfXs[0]<=0)
      if(allCardsWidth>sliderWrapperWidth)
        if(Math.abs(newPairOfXs[1]-newPairOfXs[0])<allCardsWidth-sliderWrapperWidth)
          setPairOfXs(newPairOfXs)
  }

  function onSliderMove(evt){
    // debugger
    let curX=evt.clientX
    let newPairOfXs=[]
    newPairOfXs[0]=pairOfXs[0]
    newPairOfXs[1]=curX
    if(newPairOfXs[1]-newPairOfXs[0]<=0 )
    // первое условие- стоп на левой границе, второе и третье - на правой
      if(allCardsWidth>sliderWrapperWidth)
        if(Math.abs(newPairOfXs[1]-newPairOfXs[0])<allCardsWidth-sliderWrapperWidth)
          setPairOfXs(newPairOfXs)      
  }

  function onSliderEndMove(evt){
    let curX=evt.clientX
    let newPairOfXs=[]
    newPairOfXs[0]=-(curX-pairOfXs[0])
    // перекладываем разницу в начальный x для дальнейшего учёта начальной точки
    newPairOfXs[1]=0
    if(newPairOfXs[1]-newPairOfXs[0]<=0){
      // разница newPairOfXs[1]-newPairOfXs[0] по модулю описывает насколько 
      // необходимо передвинуть блок с карточками (упражнениями например) 
      // знак указывает на направление передвижения
      if((allCardsWidth>sliderWrapperWidth) && (Math.abs(newPairOfXs[1]-newPairOfXs[0])<allCardsWidth-sliderWrapperWidth)){
        setPairOfXs(newPairOfXs)//добавляем новую ккординату
      }else{
        // не добавляем новую координату
        // негативный случай, не двигаем, 
        // просто перекладываем разницу в начальную точку
        newPairOfXs[0]=-(pairOfXs[1]-pairOfXs[0])
        newPairOfXs[1]=0
        setPairOfXs(newPairOfXs)
      }
    } else{
      setPairOfXs([0,0])
    }
  }

  function onPressedMouseOutsideTheSlider(){
    let newPairOfXs=[]
    newPairOfXs[0]=-(pairOfXs[1]-pairOfXs[0])
    newPairOfXs[1]=0
    setPairOfXs(newPairOfXs)
  }

  const onTouchStartHandler=(evt)=>{
    onSliderStartMove(evt.changedTouches[0]);
  }

  const onTouchHandler = (evt)=>{
    onSliderMove(evt.changedTouches[0])
  }
  
  const onTouchEndHandler = (evt)=>{
    onSliderEndMove(evt.changedTouches[0])
  }

  const onMouseDown = (evt)=>{
    evt.preventDefault()
    isMouseDown=true
    onSliderStartMove(evt)
  }

  const onMouseMove = (evt)=>{
    evt.stopPropagation()
    if(isMouseDown){
      onSliderMove(evt)
      sliderIsDragging=true
    }
  }
  
  // const onMouseMoveCustomSlider = (evt) => {
  //   console.log("onMouseMoveCustomSlider")
  //   if(isMouseDown){
      
  //     isMouseDown=false
  //     onPressedMouseOutsideTheSlider()
  //   }
  // }

  const onMouseUp = (evt)=>{
    isMouseDown=false
    evt.stopPropagation()
    onSliderEndMove(evt)
  }

  const onClick = (evt)=>{
    if(sliderIsDragging){
      evt.stopPropagation()
      sliderIsDragging=false
    }    
  }
  
  const slides = React.Children.map(children, (child, index)=>{
    if(index===0)
      return <SliderSlide ref={sliderSlide}>{child}</SliderSlide>
    else
      return <SliderSlide>{child}</SliderSlide>
  })

  return(
      <CustomSlider>
        <SliderWrapper
          className="className"
          ref={sliderWrapper}
          onDragStart={()=>{return false}}
          onMouseDown={(e)=>{ onMouseDown(e)}}
          onMouseUpCapture={(e)=>{ onMouseUp(e)}}
          onClickCapture={(e)=>{ onClick(e)}}
          onMouseMove={(e)=>{ onMouseMove(e)}}
          onTouchStart={(evt)=>{onTouchStartHandler(evt)}}
          onTouchMove={(e)=>{onTouchHandler(e)}}
          onTouchEnd={(evt)=>{onTouchEndHandler(evt)}}          
          style={{transform: `translateX(${(pairOfXs[1]-pairOfXs[0])}px)`, transitionDuration: '0ms'}}>
          {slides}         
        </SliderWrapper>
      </CustomSlider>
  )
}
export default Slider