import styled from "styled-components"

export const CharWrapper = styled.div`
  position: relative;
  width: 480px;
  margin-bottom: 50px;

  @media (min-width: 2200px) {
    width: 980px;
  }
`

export const LabelChar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 102%;
  left: -1%;
  top: 100%;
  color: rgba(221, 221, 221, 1);
`
