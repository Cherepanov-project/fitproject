import React, { useState } from 'react';
import { useField } from 'formik';
import { nanoid } from 'nanoid';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { ErrorMessage, InputSelect } from '../../pages/user/userLoginOrRegisterStyle';

const FormSelectField = (props) => {
  const [field, meta] = useField(props);

  const [selectValue, setSelectValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <Box paddingBottom={1}>
      <FormControl sx={{ width: '100%' }}>
        <InputSelect error={meta.error && meta.touched} type="text" {...field} {...props}>
          <InputLabel sx={{ fontSize: 15, color: '#A7A3FF'}} id="selectLabel">
            {props.placeholder}
          </InputLabel>
          <Select
            sx={{ width: '100%'}}
            labelId="selectLabel"
            id="select"
            value={selectValue}
            label={props.placeholder}
            onChange={handleChange}>
            {props.values.map((elem) => {
              return (
                <MenuItem key={nanoid()} sx={{ fontSize: 15 }} value={elem.value}>
                  {elem.title}
                </MenuItem>
              );
            })}
          </Select>
        </InputSelect>
      </FormControl>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </Box>
  );
};

export { FormSelectField };
