import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Face to Face Meeting" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Virtual Meeting" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Internal Meeting" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Call Out" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Technical Onsite Activity" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Technical Remote Activity" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Presales Activity" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Training/Event" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Study/Certification" />
      <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'pink', '&.Mui-checked': { color: 'pink', } }} />} label="Others;please specify" />
    </FormGroup>
  );
}