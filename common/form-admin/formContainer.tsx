import React from 'react';
import styled from 'styled-components';

import classes from './form.module.scss';

const FormAdminWrapper = styled.div`
   width: 380px;
   border-radius: 8px;
   background-color: #FFFFFF; 
   padding: 32px 40px;
   color: #9FA2B4;
   font-size: 14px;
`;

export const FormContainer = ({ children, ...props }) => {

  return (
    <FormAdminWrapper {...props}>
      {children}
    </FormAdminWrapper>
  );
};

