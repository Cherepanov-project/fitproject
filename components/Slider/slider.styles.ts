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
  //padding: 15px 56px;

  display: grid;
  grid-template-columns: 55px 1fr 55px;
  column-gap: 15px;
`

export const StyledButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  cursor: pointer;
  font-size: 24px;
  font-weight: normal;

  :hover {
    border: 3px ridge #fefefe;
    font-weight: bold;
  }
`

export const Container = styled.div`
  overflow: hidden;
  text-overflow: clip;
  padding: 15px 0;
`

export const StyledButtonRight = styled.div`
  justify-content: end;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  cursor: pointer;
  font-size: 24px;
  font-weight: normal;

  :hover {
    border: 3px ridge #fefefe;
    font-weight: bold;
  }
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
