import styled from "styled-components"

import { IDisplayContainer, IImg } from "./dish.interface"

export const ButtonFood = styled.button<IDisplayContainer>`
    display: ${({ $display }) => (!$display ? "inline-block" : "none")};
    background-color: #408eba;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 7px 20px;
    margin-right: 10px;
`

export const DishComponent = styled.div<IImg>`
    min-height: 500px;
    background: url(${({ imgUrl }) => imgUrl});
    background-position: top right;
    background-repeat: no-repeat;
    background-color: white !important;
    border-radius: 12px;
    margin: 0 auto;
    width: 100%;
`

export const DishItem = styled.div`
    margin-top: 34px;
    width: 43%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
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
    justify-content: space-around;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const FoodContainer = styled.div<IDisplayContainer>`
    display: ${({ $display }) => ($display ? "block" : "none")};
    margin-bottom: 30px;
    h3 {
        margin-bottom: 10px;
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
`

export const IngredientsItemText = styled.div`
    margin-left: 10px;
`

export const DishDescriptionWrapper = styled.div`
    margin-bottom: 18px;
`
