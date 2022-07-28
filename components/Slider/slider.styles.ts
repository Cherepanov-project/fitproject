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
  grid-template-columns: 65px 1fr 65px;
  column-gap: 15px;
`

export const StyledSlideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  margin: auto;
  font-size: 32px;
  font-weight: normal;
  border: 3px solid #f1f1f1;
  background-color: inherit;
  border-radius: 50%;

  &:hover {

    font-weight: bold;
    cursor: pointer;
  }

  &:disabled {
    border: none;
    color: #999999;
    font-weight: normal;
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
