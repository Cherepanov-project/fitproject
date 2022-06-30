import styled from "styled-components"

export const Container = styled.div`
    background: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 8px 8px 0 0;
    padding: 32px;
`

export const ButtonSort = styled.button`
    background: none;
    border: none;
    color: gray;
    font-size: 14px;
    font-weight: 600;
`

export const ButtonFilter = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
`

export const Title = styled.h2`
    font-size: 19px;
    font-weight: 600;
    color: #252733;
    margin-right: auto;
`
export const ButtonList = styled.div`
    display: flex;
    width: 225px;
`

export const MenuIcon = styled.div``

export const Aa = styled.a`
    padding: 0;
    line-height: 40px;
    text-decoration: none;
    outline: none;
    display: flex;
    color: white;
    font-size: 16px;
    transform: translateX(5%);
    border-bottom: 1px solid white;

    &:hover {
        color: #ffa07a;
        border-bottom: 1px solid #ffa07a;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    top: 200px;
    right: 150px;
    width: 150px;
    transform: translateX(-45%);
    background-color: red;
    border: 1px solid red;
    border-radius: 10px;
    overflow: hidden;
    font-size: 14px;
    z-index: 2;
`
export const FilterItem2 = styled.div`
    line-height: 40px;
    color: white;
    font-size: 16px;
    border-bottom: 1px solid white;
    &:hover {
        color: #ffa07a;
        border-bottom: 1px solid #ffa07a;
    }
`

export const IconBack = styled.div`
    width: 25px;
    color: red;
    background: white;
    text-align: center;
    border-radius: 50%;
    &:hover {
        background: #ffa07a;
    }
`
export const ContainerCenter = styled.div``
export const InputCheckbox = styled.input``
