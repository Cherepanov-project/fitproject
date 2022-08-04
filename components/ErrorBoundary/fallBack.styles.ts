import styled from "styled-components"

export const StyledWrapper = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
`
export const StyledErrorContainer = styled.div`
    width: 100%;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #ffffff;
`
export const StyledTitle = styled.h2`
    width: 100%;
    padding-bottom: 7px;
    color: #3751FF;
    &:first-child {
        margin-bottom: 15px;
    }
`
export const StyledPre = styled.pre`
    width: 100%;
    margin-bottom: 25px;
`