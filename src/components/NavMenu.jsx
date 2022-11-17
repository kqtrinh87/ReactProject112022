import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Xmath from './API/Xmath';
import AboutMe from './AboutMe';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Game');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction
  label="Game" 
  icon={<CalculateRoundedIcon />} 

  />
  <BottomNavigationAction
  label="About Me"
  icon={<SentimentSatisfiedAltRoundedIcon />}
  />
  
  <BottomNavigationAction
  label="Support"
  rel="noopener noreferrer"
  target="_blank"
  href="https://www.paypal.com/donate/?hosted_button_id=L8QFTGV5HT492"
  icon={<AttachMoneyRoundedIcon />}
  />

</BottomNavigation>
  );
}