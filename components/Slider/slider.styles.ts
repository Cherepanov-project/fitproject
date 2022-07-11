import styled from "styled-components"

export const CustomSlider = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  z-index: 1;
  padding: 0 58px;
  background-color:#fff;
`
export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  
`

export const SliderSlide = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding: 0 ;  
`