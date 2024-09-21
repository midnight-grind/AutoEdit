import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CircularProgressWithLabel from './CircularWithValueLabel';

import '../css/RadioButtonsGroup.css'

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="split" control={<Radio />} label={<span className="Text">Split mp3, mp4, or wav</span>} className='Text'/>
        <CircularProgressWithLabel value={5} />
        <FormControlLabel value="autoedit" control={<Radio />} label="Speaker Timestamps" />
        <FormControlLabel value="clean" control={<Radio />} label="Clean Up Transitions" />
      </RadioGroup>
    </FormControl>
  );
}