import React from 'react';
import {useField, ErrorMessage} from "formik";
import styled, {css} from 'styled-components';

const StyledInput = styled.input`
    font-size: 14px;
    width: 100%;
    padding: 11px 16px;
    border: ${props => props.errorProps?'1px solid #F0F1F7': '1px solid red'};
    margin-top: 6px;
    border-radius: 8px;
    color: #4B506D;
    &:focus{
        outline-color: #1890FF;
    }
    &::placeholder {
    color: #BFBFBF;
    }
`;

const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 12px;
    color: #4B506D;
`;

const DivInput = styled.div`
    margin-top: 20px;
`;

const ErrorForm = styled(ErrorMessage)`
    color: red;
`;

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <DivInput>
            <StyledLabel htmlFor={field.name}>{label}</StyledLabel>
            <StyledInput
                errorProps={!meta.error}
                {...field} {...props}
                autocomplete='off'/>
            <ErrorForm component='div' name={field.name}/>

        </DivInput>
    );
};

export default TextField;