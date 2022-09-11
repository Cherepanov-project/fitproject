import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: repeat(auto-fill,23%);
  grid-auto-rows: 10px;
  gap: 20px;
  font-family: "Roboto";
  font-weight: 400;
  justify-content: space-between;
`