import styled from "styled-components"

interface IStyleFilter {
    animate?: boolean;
}

export const StyleSubmenu = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`

export const StyleFilter = styled.div<IStyleFilter>`
  transform: ${({ animate }) =>
          animate ? "translateX(-110%)" : "translateX(0%)"};
  transition: transform 0.5s ease;
`

export const StyledButtonSort = styled.button`
    background: none;
    border: none;
    color: gray;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`

export const StyleButtonReset = styled.div`
  padding: 5px;
`

export const StyledDropdown = styled.div`
    position: absolute;
    top: 175px;
    //right: 130px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    overflow: hidden;
    z-index: 2;
    width: 150px;
    //height: 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const StyledFilterOption = styled.div<IStyleFilter>`
    &:not(:last-of-type) {
        border-bottom: 1px solid #e6e6e6;
    }
`

export const StyledSubmenuOption = styled.div<IStyleFilter>`
  padding: 5px;
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 15px 20px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.9rem;
    &:hover {
        background-color: #F2F2F2;
    }
`

export const StyledInput = styled.input`
    appearance: none;
`

export const StyledSubmenu = styled.div<IStyleFilter>`
    //position: absolute;
    font-family: inherit;
    top: 175px;
    //right: 130px;
    min-width: 150px;
    overflow: hidden;
    padding: 5px 5px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #e6e6e6;
    //min-height: 150px;
    z-index: ${({ animate }) =>
    animate ? "3" : "-1"};
`

export const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 70%;
    width: 25px;
    height: 25px;
    text-align: center;
    border: none;
    background: none;
    
    &:hover {
        background-color: #F2F2F2;
    }
`

export const StyledSubLabel = styled.label`
    display: flex;
    flex-direction: row;
    padding: 0 5px;
    margin-top: 10px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.9rem;
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`
