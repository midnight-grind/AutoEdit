import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="split" control={<Radio />} label="Split Mp3 File" />
        <FormControlLabel value="autoedit" control={<Radio />} label="Auto Edit" />
        <FormControlLabel value="clean" control={<Radio />} label="Clean Up Audio" />
      </RadioGroup>
    </FormControl>
  );
}