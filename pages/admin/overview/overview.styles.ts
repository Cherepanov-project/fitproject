import styled from "styled-components"

export const StyleMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(247, 248, 252, 1);
    padding: 2rem calc(2rem + 1px) 2rem calc(2rem - 2px);
    font-family: Mulish;
`

export const StyleContainerHeader = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    justify-content: space-between;
    div:last-child {
        margin-right: 0;
    }
`

export const StyleTrends = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;

    outline: 1px solid rgba(223, 224, 235, 1);
    border-radius: 8px;
`

export const StyleGraphOnTrends = styled.div`
    width: 730px;
    height: 546px;
    margin: 0;
    padding: 21px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);

    border-right: 1px solid rgba(223, 224, 235, 1);
    display: flex;
    flex-direction: column;
    flex-grow: 0;

    @media (max-width: 1300px) {
        border-right: none;
        width: 100%;
    }
`

export const StyleBlockHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyleBlockHeaderLeftSide = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const StyleBlockHeaderRightSide = styled.div`
    height: 80px;
    width: 204px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyleCurveDesignation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

interface StyleCurveDesignationColorProps {
    color: string
}

export const StyleCurveDesignationColor = styled.div<StyleCurveDesignationColorProps>`
    height: 0;
    width: 16px;
    border: 2px solid rgba(55, 81, 255, 1);
    border-radius: 2px;
    margin-right: 8px;
    margin-top: 6px;
    border-color: ${({ color }) => color};
`

export const StyleCardsOnTrends = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: no-wrap;
    margin: 0;
    padding: 0;

    flex-grow: 1;
    flex-shrink: 1;

    & > div {
        box-sizing: border-box;
        border-bottom: 1px solid rgba(223, 224, 235, 1);
        border-radius: 0;

        text-align: center;

        &:last-of-type {
            border-bottom: none;
        }

        @media (max-width: 1300px) {
            width: 25%;
            text-align: center;
            border-bottom: none;

            border-top: 1px solid rgba(223, 224, 235, 1);
            border-right: 1px solid rgba(223, 224, 235, 1);

            &:last-of-type {
                border-right: none;
                width: 100%;
            }

            &:nth-child(4) {
                border-right: none;
            }
        }
    }

    border-bottom: 1px solid rgba(223, 224, 235, 1);
    &:last-of-type {
        border-bottom: none;
    }

    @media (max-width: 1300px) {
        flex-direction: row;
        flex-wrap: wrap;

        width: 100%;
    }
`

export const StyleTicketsAndTasks = styled.div`
    display: flex;
    flex-basis: 0;
    flex: 1 1 0px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 0 0;

    flex-wrap: wrap;
`

export const StyleWidget = styled.div`
    width: 49%;
    height: 336px;
    box-sizing: border-box;
    margin: 0 0 2rem 0;
    padding: 32px 32px 0 32px;
    background-color: rgba(255, 255, 255, 1);
    outline: 1px solid rgba(223, 224, 235, 1);
    border-radius: 8px;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: nowrap;

    .MuiInputBase-root {
        width: 100%;
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`

export const StyleBlockHeaderRightSideStyled = styled(
    StyleBlockHeaderRightSide
)`
    justify-content: flex-end;
`

export const StyleContentList = styled.div`
    width: 100%;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #ffffff;
`
export const StyleFooterRecipes = styled.div``
