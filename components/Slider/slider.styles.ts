import styled from "styled-components"

export const CustomSlider = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  position: relative;
  list-style: none;
  z-index: 1;
  background-color: #fff;
  padding: 15px 56px;
`
export const Container = styled.div`
  overflow: hidden;
  text-overflow: clip;
`

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
`

export const SliderSlide = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`
