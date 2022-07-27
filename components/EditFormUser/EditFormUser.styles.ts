import styled from "styled-components"
import { Form } from "formik"
import { Button } from "@mui/material"

export const StyleContentWrapper = styled.div`
    width: 100%;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #ffffff;
`

export const StyleMessageBox = styled.div`
    max-width: 100%;
    font-weight: 700;

    margin: 15px 25px;

    p {
        margin-left: 15px;
    }
`

export const StyleForm = styled(Form)`
    max-width: 883px;
    margin: 0 auto;

    @media screen and (max-width: 1280px) {
        margin-left: 25px;
    }

    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-wrap: wrap;

        &:last-child {
            max-width: 565px;
            justify-content: space-between;
        }
    }

    label {
        max-width: 100%;

        margin: 0 25px 30px 0;

        display: flex;
        flex-direction: column;

        box-sizing: border-box;

        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #6f7482;

        .error {
            color: red;
            max-width: 200px;
        }
    }

    input,
    select {
        box-sizing: border-box;
        background: #f8fafc;
        border: none;
        border-radius: 4px;

        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #b8bcca;

        padding: 12px;

        &:focus {
            outline: 1px solid gray;
        }

        &::-webkit-input-placeholder {
            font-size: 16px;
            line-height: 150%;
            color: #b8bcca;
        }

        &::-moz-placeholder {
            font-size: 16px;
            line-height: 150%;
            color: #b8bcca;
        }

        &:-ms-input-placeholder {
            font-size: 16px;
            line-height: 150%;
            color: #b8bcca;
        }
    }

    input[type="submit"] {
        padding: 4px 16px;
        width: 106px;
        height: 40px;

        margin: 0 0 23px auto;

        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: white;

        background: #0048d9;

        border-radius: 4px;
        border: none;

        cursor: pointer;
    }

    input[type="email"] {
        width: 300px;

        @media screen and (max-width: 435px) {
            width: 250px;
        }
    }
`
export const StyleBackButton = styled(Button)`
    height: 40px;
`
