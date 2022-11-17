import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch, useSelector } from 'react-redux'
import { randomEasyMode, randomMediumMode, randomHardMode, randomVeryHardMode, randomInsaneMode,} from "../slices/gameModeSlice"

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function OperationMode() {
  const [gameMode, setGameMode] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');

  const handleGameMode = (event, newGameMode) => {
    setGameMode(newGameMode);
  };

  const handleDifficulty = (event, newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  // PULL FROM STORE
  // const { gameMode } = useSelector((state) => state.gameMode);
  
  const dispatch = useDispatch();

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="large"
          value={gameMode}
          exclusive
          onChange={handleGameMode}
        >
          <ToggleButton value="random">🔀</ToggleButton>
          <ToggleButton value="addition">➕</ToggleButton>
          <ToggleButton value="subtraction">➖</ToggleButton>
          <ToggleButton value="multiplication">✖️</ToggleButton>
          <ToggleButton value="division">➗</ToggleButton>
        </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="large"
          value={difficulty}
          exclusive
          onChange={handleDifficulty}
          // aria-label="text formatting"
        >
          <ToggleButton value="very_easy" onClick={() => dispatch(randomEasyMode)}>👶<br /></ToggleButton>
          <ToggleButton value="easy" onClick={() => dispatch(randomMediumMode)}>😊<br /></ToggleButton>
          <ToggleButton value="hard" onClick={() => dispatch(randomHardMode)}>😅 <br /></ToggleButton>
          <ToggleButton value="very_hard" onClick={() => dispatch(randomVeryHardMode)}>😨<br /></ToggleButton>
          <ToggleButton value="insane" onClick={() => dispatch(randomInsaneMode)}>💀<br /></ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}

// import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// export default function ColorToggleButton() {
//   const [alignment, setAlignment] = React.useState('web');

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <>
//     <ToggleButtonGroup
// color="primary"
// value={alignment}
// exclusive
// onChange={handleChange}
// aria-label="Math Operation">

// </ToggleButtonGroup>
// </>
    
//   );
// }