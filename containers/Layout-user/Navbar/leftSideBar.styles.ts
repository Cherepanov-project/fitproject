import styled, { css } from "styled-components"

import { TStyledDiv } from "../../Layout-admin/layoutAdmin.interface"

export const SidebarWrapper = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
  padding: 21px 60px;
  position: sticky;
  top: 0;
  bottom: 21px;
`
export const Sidebar = styled.div`
  width: 104px;
  height: 100%;
  background: linear-gradient(180deg, #6d63ff 0%, #3b32c0 100%);
  border-radius: 40px;
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
export const BottomIconWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const Divider = styled.span`
    width: 69px;
    color: white;
    background-color: white;
    border: 1px solid #ffffff;
    margin-bottom: 24px;
`

export const ImageWrapper = styled.div<TStyledDiv>`
    width: 34px;
    height: 34px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    cursor: pointer;

    :hover {
        background-color: #3c3693;
        width: 34px;
        height: 34px;
    }
    
    ${props => {
        if (props.selected) {
            return css`
                background-color: #3c3693;
                 width: 34px;
                 height: 34px;
                `
        }
    }
}
`

export const Image = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`
