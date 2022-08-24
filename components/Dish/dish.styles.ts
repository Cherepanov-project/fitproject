import styled from "styled-components"

import { IDisplayContainer, IImg } from "./dish.interface"

export const ButtonFood = styled.button<IDisplayContainer>`
  display: ${({ $display }) => (!$display ? "inline-block" : "none")};
  background-color: #408eba;
  border-radius: 4.31628px;
  border: 1.07907px solid #408eba;
  padding: 6px 0;
  margin-right: 10px;

  width: 125px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #65a2c5;
    border-color: #65a2c5;
  }
`
export const ButtonFoodTransparent = styled(ButtonFood)`
  background-color: transparent;
  color: #408eba;

  &:hover {
    background-color: #e5eef3;
  }
`

export const DishComponent = styled.div<IImg>`
  min-height: 500px;
  background: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-color: white !important;
  border-radius: 12px;
  margin: 0 auto;
  width: 100%;
  background-position: 70% 50%;
  padding: 22px 33px 30px 33px;
`

export const DishItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const NutritionalItem = styled.div`
  width: 70px;
  height: 80px;
  background: #f0f7ff;
  border: 1px solid white;
  text-align: center;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 10px;

  padding: 7px 0 11px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #000000;

  p {
    font-size: 19.4233px;
    line-height: 23px;
    padding: 0;

    p {
      font-size: 12.9488px;
      line-height: 15px;
      margin-top: 1px;
      padding: 0;
    }
  }
  span {
    font-size: 12.9488px;
    line-height: 15px;
    color: #969696;
  }
`

export const FoodContainer = styled.div<IDisplayContainer>`
  display: ${({ $display }) => ($display ? "block" : "none")};

  h3 {
    margin-top: 18px;
    font-family: "Arima Madurai";
    font-style: normal;
    font-weight: 800;
    font-size: 19.4233px;
    line-height: 32px;
    color: #969696;
  }
`

export const NutritionalContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const IngredientsItem = styled.div`
  width: 160px;
  height: 40px;
  padding-right: 10px;
  margin-bottom: 10px;
  display: flex;
`

export const IngredientsItemImg = styled.div<IImg>`
  width: 50px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid white;
  background: no-repeat center url(${({ imgUrl }) => imgUrl}) #f0f7ff;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
`

export const IngredientsItemText = styled.div`
  height: 40px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;

  p {
    font-size: 10.5509px;
    line-height: 12px;
    color: #404040;
    padding-bottom: 3px;
  }

  span {
    font-size: 8.1242px;
    line-height: 10px;
    color: #969696;
  }
`

export const DishDescriptionWrapper = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13.2078px;
  line-height: 16px;
  color: #404040;

  h2 {
    font-family: "Arima Madurai";
    font-weight: 800;
    font-size: 23.9784px;
    line-height: 39px;
  }
`
