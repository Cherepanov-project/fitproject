import styled from "styled-components";

export const ContainerBtn = styled.div`
    height: 90px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    padding-right: 5px;
`

export const ButtonSort = styled.button`
    background: none;
    border: none;
    padding-right: 10px;
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

export const ButtonAllRecipies = styled.button`
   font-size: 19px;
   font-weight: 600;
   color: #252733;
   background: none;
   border: none;
   margin-left: 22px;
`
export const Btns = styled.div`
   display: flex;
   width: 225px;
   margin-left: auto;
`

export const MenuIcon = styled.div`
   
`

export const Aa = styled.a`
    padding: 0;
    line-height: 40px;
    text-decoration: none;
    outline: none;
    display: flex;
    color: white;
    font-size: 16px;
    padding-left: 10px;
    transform: translateX(5%);
    border-bottom: 1px solid white;
    
    &:hover {
        color: #FFA07A; 
        border-bottom: 1px solid #FFA07A;
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
    padding: 10px;
    overflow: hidden;
    font-size: 14px;
    z-index: 2;
`
export const FilterItem2 = styled.div`
    line-height: 40px;
    color: white;
    font-size: 16px;
    padding-left: 5px;
    border-bottom: 1px solid white;
    &:hover {
        color: #FFA07A;
        border-bottom: 1px solid #FFA07A;
    }
`

export const IconBack = styled.div`
margin-left: 5px;
width: 25px;
color: red;
background: white;
text-align: center;
border-radius: 50%;
&:hover {
    background: #FFA07A;
}
`
export const ContainerCenter = styled.div`
margin-top: 10px;
` 
export const InputCheckbox = styled.input`
margin-right: 15px;
`













