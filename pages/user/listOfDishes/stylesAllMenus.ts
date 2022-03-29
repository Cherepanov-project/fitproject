import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 230px;
  height: 630px;
`;

export const SideBarCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BoxCheckBox = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 800px;
  heigth: 630px;

  box-sizing: border-box;
`;
export const AllMenusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 50px auto;
  width: 1000px;
  height: 630px;
`;

export const MenuItemTitule = styled.div`
  text-align-last: center;
`;
export const MenuItemDescrition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
`;

export const MenuRatingWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MenuImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
  margin-top: -55px;
`;

export const Specification = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SpecificationSpan = styled.span`
  color: #6a983c;
  background-color: #f4f8ec;
  border: 1 px black;
  margin: 1px;
  padding: 1px 10px;
  border-radius: 10px;
`;

export const MenuH2 = styled.h2`
  margin: 15px 0;
`;

export const ListDishes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 770px;
  height: 600px;
  justify-content: space-evenly;
`;
