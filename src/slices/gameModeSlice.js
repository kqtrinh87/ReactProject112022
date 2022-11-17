import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameMode: 'randomEasyMode'
};

const gameModeSlice = createSlice ({
    name: 'gameMode',
    initialState,
        reducers: {
            randomEasyMode: (state) => {
                state.gameMode = 'randomEasyMode';
            },
            randomMediumMode: (state) => {
                state.gameMode = 'randomMediumMode';
            },
            randomHardMode: (state) => {
                state.gameMode = 'randomHardMode';
            },
            randomVeryHardMode: (state) => {
                state.gameMode = 'randomVeryHardMode';
            },
            randomInsaneMode: (state) => {
                state.gameMode = 'randomInsaneMode';
            },
            // addEasyMode: (state) => {
            //     state.gameMode = 'addEasyMode';
            // },
            // addMediumMode: (state) => {
            //     state.gameMode = 'addMediumMode';
            // },
            // addHardMode: (state) => {
            //     state.gameMode = 'addHardMode';
            // },
            // addVeryHardMode: (state) => {
            //     state.gameMode = 'addVeryHardMode';
            // },
            // addInsaneMode: (state) => {
            //     state.gameMode = 'addInsaneMode';
            // },
            // subEasyMode: (state) => {
            //     state.gameMode = 'subEasyMode';
            // },
            // subMediumMode: (state) => {
            //     state.gameMode = 'subMediumMode';
            // },
            // subHardMode: (state) => {
            //     state.gameMode = 'subHardMode';
            // },
            // subVeryHardMode: (state) => {
            //     state.gameMode = 'subVeryHardMode';
            // },
            // subInsaneMode: (state) => {
            //     state.gameMode = 'subInsaneMode';
            // },
            // mulEasyMode: (state) => {
            //     state.gameMode = 'mulEasyMode';
            // },
            // mulMediumMode: (state) => {
            //     state.gameMode = 'mulMediumMode';
            // },
            // mulHardMode: (state) => {
            //     state.gameMode = 'mulHardMode';
            // },
            // mulVeryHardMode: (state) => {
            //     state.gameMode = 'mulVeryHardMode';
            // },
            // mulInsaneMode: (state) => {
            //     state.gameMode = 'mulInsaneMode';
            // },
            // divEasyMode: (state) => {
            //     state.gameMode = 'divEasyMode';
            // },
            // divMediumMode: (state) => {
            //     state.gameMode = 'divMediumMode';
            // },
            // divHardMode: (state) => {
            //     state.gameMode = 'divHardMode';
            // },
            // divVeryHardMode: (state) => {
            //     state.gameMode = 'divVeryHardMode';
            // },
            // divInsaneMode: (state) => {
            //     state.gameMode = 'divInsaneMode';
            // },

        }
});

export const { 
    randomEasyMode, 
    randomMediumMode, 
    randomHardMode, 
    randomVeryHardMode,
    randomInsaneMode,
    // addEasyMode, 
    // addMediumMode, 
    // addHardMode, 
    // addVeryHardMode,
    // addInsaneMode,
    // subEasyMode, 
    // subMediumMode, 
    // subHardMode, 
    // subVeryHardMode,
    // subInsaneMode,
    // mulEasyMode, 
    // mulMediumMode, 
    // mulHardMode, 
    // mulVeryHardMode,
    // mulInsaneMode,
    // divEasyMode, 
    // divMediumMode, 
    // divHardMode, 
    // divVeryHardMode,
    // divInsaneMode,
  } = gameModeSlice.actions;

export default gameModeSlice.reducer;