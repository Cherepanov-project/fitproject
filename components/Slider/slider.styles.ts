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

  display: grid;
  grid-template-columns: 55px 1fr 55px;
  column-gap: 15px;
`

export const StyledSlideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  font-size: 32px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: inherit;

  :hover {
    border: 3px ridge #fefefe;
    font-weight: bold;
    cursor: pointer;
  }

  :disabled {
    border: none;
    color: #999999;
    font-weight: normal;
    background-color: #fafafa;
    cursor: default;
  }
`

export const Container = styled.div`
  overflow: hidden;
  text-overflow: clip;
  padding: 15px 0;
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
