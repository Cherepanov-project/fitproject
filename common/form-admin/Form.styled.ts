import styled from 'styled-components';

export const DivCenter = styled.div`
   text-align: center;
   
`;

export const DivDashboard = styled(DivCenter)`
   font-size: 19px;
   font-weight: bold;
`;

export const FormH1 = styled.h1`
   font-size: 24px;
   margin: 32px 0 12px;
   font-weight: bold;
   text-align: center;
   color: #252733;
`;

export const FormH2 = styled.h2`
   text-align: center;
   font-size: 14px;
   font-weight: normal;
   margin-bottom: 48px;
`;

export const StyledButton = styled.button`
   font-size: 14px;
   width: 100%;
   margin-top: 26px;
   margin-bottom: 32px;
   padding: 15px 0;
   border-radius: 8px;
   background-color: #3751FF;
   border: 1px solid #3751FF;
   color: white;
   cursor: pointer;
   &:hover{
   border: 1px solid #3751FF;
   color: #3751FF;
   background-color: white;
   transition: 0.5s;
   }
`;

export const FormA = styled.a`
   color: #3751FF;
   padding-left: 5px;
   cursor: pointer;
   &:hover{
   color: #252733;
   }
`;