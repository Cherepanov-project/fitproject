import styled from "styled-components"

export const StyledLayoutUser = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  padding: 0;
  margin: 0;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin: 0;
`

export const Content = styled.div`
  width: auto;
  background-color: #f1f1f1;
  margin-right: 60px;
  padding-bottom: 21px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
`

export const TopInput = styled.input`
    width: 402px;
    height: 55px;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #bebebe;
    padding-left: 20px;
    margin: 38px 0 47px 0;
`
