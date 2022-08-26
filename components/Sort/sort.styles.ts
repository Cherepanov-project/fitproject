import styled from "styled-components";

export const StyleLabel = styled.label`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
    //cursor: pointer;
    //display: block;
    white-space: nowrap;
    padding: 15px 20px;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.9rem;
    &:hover {
        background-color: rgba(224, 224, 224, 0.3);
        color: rgba(0, 0, 0, 0.6)
    }
    &:not(:last-of-type){
        border-bottom: 1px solid #E0E0E0;
    }
`

export const StyleButton = styled.div`
  cursor: pointer;
`

export const StyleBlockButtons = styled.div`
display: flex;
  column-gap: 5px;
`
