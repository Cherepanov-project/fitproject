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
  // height: 154px;
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

export const SliderPagination = styled.div`
  position: absolute;
  text-align: center;
  transition: 0.3s opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  height: 14px;
  bottom: 24px;
  left: 0;
  width: 100%;
`

export const SliderPaginationBullet = styled.span`
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 12px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: #ddd;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  margin: 0 4px;
`