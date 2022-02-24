import React from 'react';
import {FormAdminWrapper} from "./Form.styled";

export const FormContainer = ({ children, ...props }) => {
  return (
    <FormAdminWrapper {...props}>
      {children}
    </FormAdminWrapper>
  );
};

