import styled from "styled-components";

export const StyleLabel = styled.label`
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