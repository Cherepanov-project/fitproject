import styled, {css} from 'styled-components';
import {TStyledDiv} from "../layoutAdmin.interface";

export const SidebarWrapper = styled.div`

  height: 100vh;
  background-color: #363740;
  
`;

export const SidebarHeader = styled.div`
  padding: 50px 28px 60px;
  background-color: #363740;
  width: 100%;
  font-size: 19px;
  color: #A4A6B3;
  cursor: pointer;

  &:hover {
    color: #DDE2FF;
  }
`;

export const SidebarItem = styled.div<TStyledDiv>`
  width: 100%;
  font-size: 16px;
  padding: 16px 28px;
  color: #A4A6B3;

  &:hover {
    color: #DDE2FF;
    background-color: #3F4049;
    border-left: 3px solid #3F4049;
    padding: 16px 25px;
    cursor: pointer;
    ${(props) => {
    if (props.selected) {
        return css`
      border-left: 3px solid #DDE2FF;
    `;
    }
}}
  }

  ${(props) => {
    if (props.selected) {
        return css`
      color: #DDE2FF;
      background-color: #3F4049;
      border-left: 3px solid #DDE2FF;
      padding: 16px 25px;
      cursor: pointer;
    `;
    }
}}
`;

export const ItemName = styled.span`
  padding-left: 24px;
  display: inline-block;
`;

export const Ul = styled.ul`
  width: 255px;
  padding: 0;
  margin: 0;
`;

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #40414A;
`;

export const A = styled.a`
  display: flex;
`;
