import styled from "styled-components"
import { IImg } from "./CardDish.interface"

export const StyledBox = styled.div`
  height: 202px;
  background: #ffffff;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  border-radius: 7.03394px;
  padding: 3px;
  margin: 0 0px 72px 0;
`

export const StyledContentBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f7ff;
  border-radius: 7.03394px;
  padding: 13px 2px 3px 2px;
  box-sizing: border-box;
`

export const StyledImage = styled.div<IImg>`
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: -70px auto 0 auto;
  filter: drop-shadow(2.15814px 3.23721px 11.8698px rgba(0, 0, 0, 0.14));
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`

export const StyledTextBox = styled.div`
  padding-top: 10px;
  text-align: center;
  max-width: 210px;
  margin: 0 auto;
`

export const StyledName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15.107px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;

  p {
    font-size: 19.4233px;
    padding: 0;
    margin: 0;
  }

  span {
    display: block;
    font-size: 12.9488px;
    color: #969696;
    padding: 0;
  }
`

export const StyledRating = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 9px;

  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12.9488px;
    color: #969696;
  }
`
