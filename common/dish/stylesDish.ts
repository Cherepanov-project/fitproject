import styled from "styled-components"

interface img {
    imgUrl: any
}

interface displayContainer {
    $display?: boolean
}

export const ButtonFood = styled.button<displayContainer>`
    display: ${({ $display }) => (!$display ? "inline-block" : "none")};
    background-color: #408eba;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 7px 20px;
    margin-right: 10px;
`

export const DishComponent = styled.div<img>`
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

export const FoodContainer = styled.div<displayContainer>`
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

export const IndigrientsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
`

export const IndigrientItem = styled.div`
    width: 160px;
    height: 40px;
    padding-right: 10px;
    margin-bottom: 10px;
    display: flex;
`

export const IndigrientItemImg = styled.div<img>`
    width: 50px;
    height: 40px;
    border-radius: 7px;
    border: 1px solid white;
    background: url(${({ imgUrl }) => imgUrl}) #f0f7ff;
    background-position: center;
    background-repeat: no-repeat;
`

export const IndigrientItemText = styled.div`
    margin-left: 10px;
`

export const DishDescriptionWrapper = styled.div`
    margin-bottom: 18px;
`
