import styled from "styled-components"
import { ErrorMessage } from "formik"
import { TStyledInput } from "../../containers/Layout-admin/LayoutAdmin.interface"

export const FormAdminWrapper = styled.div`
    width: 380px;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 32px 40px;
    color: #9fa2b4;
    font-size: 14px;
`

export const DivCenter = styled.div`
    text-align: center;
`

export const DivDashboard = styled(DivCenter)`
    font-size: 19px;
    font-weight: bold;
`

export const FormH1 = styled.h1`
    font-size: 24px;
    margin: 32px 0 12px;
    font-weight: bold;
    text-align: center;
    color: #252733;
`

export const FormH2 = styled.h2`
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 48px;
`

export const StyledButton = styled.button`
    font-size: 14px;
    width: 100%;
    margin-top: 26px;
    margin-bottom: 32px;
    padding: 15px 0;
    border-radius: 8px;
    background-color: #3751ff;
    border: 1px solid #3751ff;
    color: white;
    cursor: pointer;
    &:hover {
        border: 1px solid #3751ff;
        color: #3751ff;
        background-color: white;
        transition: 0.5s;
    }
`

export const FormA = styled.a`
    color: #3751ff;
    padding-left: 5px;
    cursor: pointer;
    &:hover {
        color: #252733;
    }
`

export const StyledInput = styled.input<TStyledInput>`
    font-size: 14px;
    width: 100%;
    padding: 11px 16px;
    border: ${props =>
        props.errorProps ? "1px solid #F0F1F7" : "1px solid red"};
    margin-top: 6px;
    border-radius: 8px;
    box-sizing: border-box;
    color: #4b506d;
    &:focus {
        outline-color: #1890ff;
    }
    &::placeholder {
        color: #bfbfbf;
    }
`

export const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 12px;
    color: #4b506d;
`

export const DivInput = styled.div`
    margin-top: 20px;
`

export const ErrorForm = styled(ErrorMessage)`
    color: red;
`
