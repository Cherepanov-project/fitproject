import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 167px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;

    @media (min-width: 1700px) {
        width: 267px;
        align-items: center;
        
    }
`
export const Sidebar = styled.div`
    width: 104px;
    height: 100%;
    margin: 21px 30px;
    background: linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%);
    border-radius: 40px;
    
    @media (min-width: 1700px) {
        width: 144px;
        
    }
`

export const IconListWrapper = styled.div`
    height: 95%;
    padding: 30px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TopIconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const  BottomIconWrapper = styled.div`
display: flex;
justify-content: center;

`
export const Divider = styled.span`
    width: 69px;
    color: white;
    background-color: white;
    border: 1px solid #FFFFFF;
    margin-bottom: 24px;
`

export const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    

    
    :hover {
        background-color: #3C3693;
    }

`

export const Image = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`