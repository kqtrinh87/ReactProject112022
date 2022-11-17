import React, { useState } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';


// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return 'This field is being focused';
//     }

//     return 'Helper text';
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }

const handleSubmit = e => {
  e.preventDefault()

}

export default function UseFormControl() {
  return (
    <Box onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        {/* <OutlinedInput inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} placeholder="Answer" /> */}
        <NumericFormat label="Answer" customInput={TextField} 
        // onChange={e => setText(e.target.value)} 
        />
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Box>
  );
}