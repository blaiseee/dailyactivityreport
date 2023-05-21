// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import MainBanner from './components/MainBanner';
import { BasicTable } from './components/BasicTable';

const App = () => {
  return (
    <div className="App">
      {/* Title */}
      <MainBanner/>
      <Typography sx={{height: 50}} variant="h5" color='#fe0000' fontWeight='fontWeightBold'>
        DAILY ACTIVITY REPORT
      </Typography>
      <BasicTable/>
    </div>
  );
}

export default App;
