import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    /* height: 630px; */
    background-color: white;
    border-radius: 5px;
    /* margin: 45px auto; */
`;

export const SidebarWrapper = styled.div`
    width: 230px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    @media (min-width: 2300px) {
        width: 330px;
    }
`;

export const SidebarListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 89px 22px 89px 15px;

    :last-of-type {
        margin: 0 22px 89px 15px;
    }
`

export const SidebarListTitle = styled.div`
    font-size: 18px;
    color: #151515;
    font-weight: 600;

    @media (min-width: 2300px) {
        font-size: 24px;
    }
`
export const SidebarItemListWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SidebarListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 12px;

    @media (min-width: 2300px) {
        font-size: 18px;
    }

    span {
        width: 24px;
        height: 24px;
    }
`

export const SidebarListItemCheckbox = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 12px;

    span {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 2300px) {
        font-size: 18px;
    }
`

export const SidebarStyledItemCheckbox = styled.div`
    margin-left: 8px;
`

export const CategoriesStyledItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    width: 38px;
    height: 18px;
    text-align: center;
    background-color: #F4F8EC;
    color: #6A983C;
    border-radius: 12px;

    @media (min-width: 2300px) {
        font-size: 18px;
    }
`

export const ItemListWrapper = styled.div`
margin-top: 53px;
margin-left: 30px;
`