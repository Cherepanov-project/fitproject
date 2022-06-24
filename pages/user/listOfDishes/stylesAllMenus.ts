import styled from "styled-components"

export const SideBarWrapper = styled.div`
    width: 250px;
    padding-left: 20px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 1700px) {
        width: 330px;
        justify-content: space-between;
    }
`

export const SideBarCheckBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const BoxCheckBox = styled.div`
    display: flex;
    align-items: center;
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 800px;
    height: 630px;

    @media (min-width: 2000px) {
        height: auto;
        /* justify-content: flex-start; */
    }

    box-sizing: border-box;

    @media (min-width: 1441px) {
        width: 100%;
        /* justify-content: space-between; */
    }
`

export const AllMenusWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    background-color: white;
    border-radius: 5px;
`

export const MenuItemTitule = styled.div`
    text-align-last: center;
    font-size: 15px;
    font-weight: 500;
`
export const MenuItemDescrition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
`

export const MenuRatingWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 12px;
    color: #969696;
`

export const MenuImg = styled.img`
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
    margin-top: -55px;

    @media (min-width: 2000px) {
        width: 250px;
        height: 250px;
    }
`

export const Specification = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`
export const SpecificationSpan = styled.span`
    color: #6a983c;
    background-color: #f4f8ec;
    border: 1 px black;
    margin: 1px;
    padding: 1px 10px;
    border-radius: 10px;
`

export const MenuH2 = styled.h2`
    margin: 15px 0;
`

export const ListDishes = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 770px;
    height: 600px;
    justify-content: flex-start;

    @media (min-width: 1441px) {
        width: 100%;
        /* justify-content: flex-start; */
    }

    @media (min-width: 2000px) {
        height: auto;
    }
`

export const SpecificationWrapper = styled.div`
    width: 193px;
    font-size: 14px;
    margin-bottom: 10px;
`
