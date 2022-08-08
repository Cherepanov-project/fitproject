import styled from "styled-components"

export const StyledWrapper = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    background-color: #f5f5f7;
    filter: drop-shadow(4px 5px 12px #2f3036);
`
export const StyledErrorContainer = styled.div`
    
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Mulish", sans-serif;
    background-image: linear-gradient(315deg, #485461 0%, #05172a 74%);
`
export const StyledTitle = styled.h2`
    padding-bottom: 7px;
    color: #0f467e;
    &:first-child {
        margin-bottom: 15px;
    }
`
export const StyledPre = styled.pre`
    margin-bottom: 25px;
    font-family: inherit;
    letter-spacing: 0.2px;
    line-height: 20px;
    font-weight: 500;
`
