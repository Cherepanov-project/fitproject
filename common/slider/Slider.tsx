import React,{useEffect, useRef, useMemo, MouseEvent, useState} from "react"
import { exerciseList } from "../../model/workout/workout"	
import {CustomSlider, SliderWrapper, SliderSlide, SliderPagination, SliderPaginationBullet} from "./SliderStyle"
let isFirefox;
let sliderIsDragging=false;
let listener;
const Slider = ({children}) => {
  const [x,setDx] = useState([0,0])
  const sliderWrapper = useRef(null)
  
  useEffect(()=>{
    isFirefox = window.navigator.userAgent.indexOf("Firefox") != -1
    listener = document.addEventListener('mouseup',()=>{sliderIsDragging=false})
    return ()=>{document.removeEventListener('mouseup', listener)}
  },[])

  function onSliderStartMove(evt){
    let curX=evt.clientX
    let newPair=[]
    newPair[0] = x[0] + curX
    newPair[1] = curX
    if(newPair[1]-newPair[0]<=0 && newPair[1]-newPair[0]>=(-sliderWrapper.current.clientWidth))
      setDx(newPair)
  }
  function onSliderMove(evt){
    let curX=evt.clientX
    let newPair=[]
    newPair[0]=x[0]
    newPair[1]=curX
    if(newPair[1]-newPair[0]<=0 && newPair[1]-newPair[0]>=(-sliderWrapper.current.clientWidth))
      setDx(newPair)
  }
  function onSliderEndMove(evt){
    let curX=evt.clientX
    let newPair=[]
    newPair[0]=-(curX-x[0])
    newPair[1]=0
    console.log(newPair)
    if(newPair[1]-newPair[0]<=0){
      if(!(newPair[1]-newPair[0]>=(-sliderWrapper.current.clientWidth))){
        newPair[0]=-(x[1]-x[0])
        newPair[1]=0
        setDx(newPair)
      }else{
        setDx(newPair)
      }
    } else{
      setDx([0,0])
    }
    
  }

  const onDragStartHandler=(evt)=>{
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    evt.dataTransfer.setDragImage(img, 0, 0);
    onSliderStartMove(evt);
  }

  const onDragHandler = (evt)=>{
    onSliderMove(evt)
  }
  
  const onDragEndHandler = (evt)=>{
    onSliderEndMove(evt)
  }

  const onTouchStartHandler=(evt)=>{
    console.log(evt);
    onSliderStartMove(evt.changedTouches[0]);
  }

  const onTouchHandler = (evt)=>{
    onSliderMove(evt.changedTouches[0])
  }
  
  const onTouchEndHandler = (evt)=>{
    onSliderEndMove(evt.changedTouches[0])
  }

  const onMouseDown = (evt)=>{
  
    sliderIsDragging=true
    onSliderStartMove(evt)
  }
  const onMouseMove = (evt)=>{
    if(sliderIsDragging) onSliderMove(evt)
  }
  const onMouseUp = (evt)=>{
    
    sliderIsDragging=false
    onSliderEndMove(evt)
  }
  
  const slides = React.Children.map(children, (child)=>{
    return <SliderSlide>{child}</SliderSlide>
  })
  return(
      <CustomSlider>
        <SliderWrapper
        // draggable={true}
        ref={sliderWrapper}
        onDrag={(e)=>{if(!isFirefox) onDragHandler(e)}}
        onDragStart={(evt)=>{if(!isFirefox) onDragStartHandler(evt)}}
        onDragEnd={(evt)=>{if(!isFirefox) onDragEndHandler(evt)}}
        onMouseDown={(e)=>{if(isFirefox) onMouseDown(e)}}
        onMouseUp={(e)=>{if(isFirefox) onMouseUp(e)}}
        onMouseMove={(e)=>{if(isFirefox) onMouseMove(e)}}
        onTouchStart={(evt)=>{onTouchStartHandler(evt)}}
        onTouchMove={(e)=>{onTouchHandler(e)}}
        onTouchEnd={(evt)=>{onTouchEndHandler(evt)}}
        style={{transform: `translateX(${(x[1]-x[0])}px)`, transitionDuration: '0ms'}}>
          {slides}
        </SliderWrapper>
        {/* <SliderPagination>
          <SliderPaginationBullet></SliderPaginationBullet>
          <SliderPaginationBullet></SliderPaginationBullet>
          <SliderPaginationBullet></SliderPaginationBullet>
          <SliderPaginationBullet></SliderPaginationBullet>
          <SliderPaginationBullet></SliderPaginationBullet>
        </SliderPagination> */}
      </CustomSlider>
  )
}
export default Slider