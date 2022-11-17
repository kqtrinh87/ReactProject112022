import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function DifficultyMode() {
  const [difficulty, setDifficulty] = useState('very_easy');

  const handleChange = (event, newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  return (
    <>
    <ToggleButtonGroup
color="primary"
value={difficulty}
exclusive
onChange={handleChange}
aria-label="Difficulty Level">

<ToggleButton value="very_easy">👶<br />Very Easy</ToggleButton>
<ToggleButton value="easy">🙂<br />Easy</ToggleButton>
<ToggleButton value="normal">😊<br />Normal</ToggleButton>
<ToggleButton value="hard">😅<br />Hard</ToggleButton>
<ToggleButton value="very_hard">😨<br />Very Hard</ToggleButton>
<ToggleButton value="insane">💀<br />Insane</ToggleButton>
</ToggleButtonGroup>
</>
    
  );
}