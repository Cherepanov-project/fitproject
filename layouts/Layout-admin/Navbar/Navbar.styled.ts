import Image from "next/image"
import styled from "styled-components"

export const NavbarWrapper = styled.nav`
    width: 100%;
    padding: 30px;
    background: #f7f8fc;
    display: flex;
    justify-content: space-between;
    align-self: center;
    box-sizing: border-box;
`

export const PageName = styled.div`
    font-size: 24px;
    font-weight: bold;
`

export const DivAdminInformation = styled.div`
    display: flex;
    align-items: center;
`

export const DivInformation = styled.div`
    display: flex;
    border-right: 1px solid #dfe0eb;
    padding: 5px 24px 5px 5px;
    height: 32px;
    align-items: center;
`

export const DivAdmin = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`

export const Anavbar = styled.a`
    margin-right: 14px;
    margin-left: 32px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`

export const ImageAdmin = styled(Image)`
    border-radius: 20px;
`
