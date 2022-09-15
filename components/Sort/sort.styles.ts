import styled from "styled-components";

export const StyleDropdown = styled.div`
  position: absolute;
  top: 175px;
  right: 130px;
  transform: translateX(-30%);
  background-color: #ffffff;
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

export const StyleLabel = styled.label`
  display: flex;
  column-gap: 10px;
  white-space: nowrap;
  padding: 15px 20px;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(224, 224, 224, 0.3);
    color: rgba(0, 0, 0, 0.6)
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #E0E0E0;
  }
`

export const StyleLabelSort = styled(StyleLabel)`
  justify-content: space-between;
`

export const StyleButton = styled.div`
  cursor: pointer;
`

export const StyleBlockButtons = styled.div`
  display: flex;
  column-gap: 5px;
`

export const StyleInput = styled.input`
    vertical-align: baseline;
    position: relative;
    margin-right: 5px;
    &:checked {
        accent-color: #E0E0E0;
        outline: 1px solid #E0E0E0;
    }
`
