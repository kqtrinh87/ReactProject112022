import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameMode: ''
};

const difficultyModeSlice = createSlice ({
    name: 'difficultyMode',
    initialState: "easy",
    reducers: {


    }
});

export const {
 difficultyMode
} = difficultyModeSlice.actions;

export default difficultyModeSlice.reducer;