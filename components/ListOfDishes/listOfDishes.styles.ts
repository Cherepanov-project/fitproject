import styled from "styled-components"

export const SideBarWrapper = styled.div`
  width: 250px;
  padding: 30px 15px;
  margin: 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

export const SideBarCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const BoxCheckBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: -10px;
`
export const BoxCheckBoxSpan = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #151515;
`
export const LayoutMenuWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 80px;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
`

export const AllMenusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
`
export const Specification = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  div {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #151515;
    color: #151515;
  }
`
export const SpecificationSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 18px;
  text-align: center;
  background-color: #f4f8ec;
  color: #6a983c;
  border-radius: 12px;

  font-family: "Poppins";
  font-style: normal;
  line-height: 18px;
  font-size: 12px;
  font-weight: 600;
`

export const MenuH2 = styled.h2`
  margin-bottom: 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`

export const ListDishes = styled.div`
  margin: 0 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const StyledAnchorDish = styled.a`
  width: calc(100% / 3 - 24px);
  margin: 12px;
`

export const SpecificationWrapper = styled.div`
  margin-bottom: 20px;
`
