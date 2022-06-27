import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #f1f1f1;

    @media (min-width: 1441px) {
        max-width: 100%;
        justify-content: space-between;
    }
`

export const Content = styled.div`
    width: 1004px;
    background-color: #f1f1f1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`

export const TopInput = styled.input`
    width: 402px;
    height: 55px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #bebebe;
    padding-left: 20px;
    margin: 38px 0 47px 0;
`
