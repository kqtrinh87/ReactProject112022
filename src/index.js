import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import XMath from './components/API/Xmath';
import { Provider } from 'react-redux';
import NavMenu from './components/NavMenu';
// import Donate from './components/DonateButton'
// import DifficultyMode from './components/DifficultyMode'
import OperationMode from './components/OperationMode'
import InputAnswer from './components/InputAnswer'

import { configureStore } from '@reduxjs/toolkit';
// import gameModeSlice from '../slices/gameModeSlice';
// import difficultyModeSlice from '../slices/difficultyModeSlice'
import dataReducer from './slices/dataSlice';

export const store = configureStore({
    reducer: dataReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      
      <NavMenu/>
      {/* <Donate/> */}
      <OperationMode/>
        <XMath/>
        <InputAnswer/>


    </Provider>

   </React.StrictMode>
);
