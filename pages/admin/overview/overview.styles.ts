import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(247, 248, 252, 1);
    padding: 2rem calc(2rem + 1px) 2rem calc(2rem - 2px);
    font-family: Mulish;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Trends = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem 0 0 0;
`

export const GraphOnTrends = styled.div`
    width: 780px;
    height: 546px;
    margin: 0;
    padding: 32px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);
    outline: 1px solid rgba(223, 224, 235, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
`

export const BlockHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BlockHeaderLeftSide = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BlockHeaderRightSide = styled.div`
    height: 80px;
    width: 204px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CurveDesignation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

interface CurveDesignationColorProps {
    color: string
}

export const CurveDesignationColor = styled.div<CurveDesignationColorProps>`
    height: 0;
    width: 16px;
    border: 2px solid rgba(55, 81, 255, 1);
    border-radius: 2px;
    margin-right: 8px;
    margin-top: 6px;
    border-color: ${({ color }) => color};
`

export const CardsOnTrends = styled.div`
    display: flex;
    width: 342px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: no-wrap;
    margin: 0;
    padding: 0;
  
    @media (max-width: 1184px) {
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: 100%;
    }
`

export const TicketsAndTasks = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem 0 0 0;
`

export const Widget = styled.div`
    width: 546px;
    height: 336px;
    box-sizing: border-box;
    margin: 0;
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
`

export const BlockHeaderRightSideStyled = styled(BlockHeaderRightSide)`
    justify-content: flex-end;
`

export const ContentList = styled.div`
    width: 100%;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #ffffff;
`
export const FooterRecipes = styled.div``
