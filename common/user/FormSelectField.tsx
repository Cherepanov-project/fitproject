import React, { useState } from 'react';
import { useField } from 'formik';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { ErrorMessage, InputSelect } from '../../pages/user/userLoginOrRegisterStyle';

const FormSelectField = (props) => {
  const [field, meta] = useField(props);

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box paddingBottom={1}>
      <FormControl sx={{ width: '100%' }}>
        <InputSelect error={meta.error && meta.touched} type="text" {...field} {...props}>
          <InputLabel sx={{ fontSize: 15, color: '#A7A3FF' }} id="selectLabel">
            {props.placeholder}
          </InputLabel>
          <Select
            sx={{ width: '100%', height: 50 }}
            labelId="selectLabel"
            id="select"
            value={age}
            label={props.placeholder}
            onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </InputSelect>
      </FormControl>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </Box>
  );
};

export { FormSelectField };