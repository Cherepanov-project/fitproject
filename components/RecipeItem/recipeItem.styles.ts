import styled from "styled-components"

export const StyledContentWrapper = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
`
export const StyledRecipeContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    padding-top: 15px;
    width: 100%;
    border-top: 1px solid #DFE0EB;
`

export const StyledTitle = styled.h1`
    width: 100%;
    padding-bottom: 7px;
    color: #3751FF;
`

export const StyledSecondaryText = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #9FA2B4;
    width: 200px;
`
export const StyledText = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    color: #252733;
    font-weight: 700;
`
export const StyledRecipeItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`
export const StyledRecipeItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`
export const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledImage = styled.img`
    max-width: 150px;
    max-height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const StyledP = styled.span`
    position: absolute;
    display: block;
    color: rgba( 159, 162, 180, 0.6);
    font-weight: 700;
    font-style: oblique;
    transform: translateX(160px) translateY(-100px);
`