import * as React from 'react';
import Box from '@mui/material/Box';
import logo from '../jump_logo.png';
import { Typography } from '@mui/material';

export default function MainBanner() {
  return (
    <div>
      <Box
        sx={{
          width: 'auto',
          height: 175,
          margin: '25px',
          backgroundColor: '#fe8081',
        }}
        ><img src={logo} alt='logo'></img></Box>
        <Typography sx={{ position: 'absolute', left: 950, top: 65, textAlign: 'right' }} display='flex' variant='h6' color='white' fontWeight='fontWeightBold'
        >7th Floor, Erechem Building, Salcedo corner V.A. Rufino Streets, Legaspi Village, Makati City<br/>Trunklines : 632.759.6809 to 10 | 759.3056 to 57 | 832.6326 | 832.6328 | 893.4606<br/>Fax : 632.759.6811</Typography>

    </div>
  );
}