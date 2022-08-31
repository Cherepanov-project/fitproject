import styled from "styled-components";

export const StyleBlockInputs = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 5px;
`

export const StyleLabelForInput = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const StyleInput = styled.input`
  width: 150px;
  padding: 5px 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
`

export const StyleSubmit = styled.button`
  padding: 5px 5px;
  background-color: rgb(55, 81, 255);
  color: white;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  //width: 50px;
  height: 30px;
`