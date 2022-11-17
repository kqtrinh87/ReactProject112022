import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstNum: '',
    secondNum: '',
    operator: '',
    answer: ''
    
};

const dataSlice = createSlice ({
    name: 'add',
    initialState,
    reducers: {
        addFirstNum(state, action) {
            // state.entities.push(action.payload),
            state.firstNum = action.payload
        },
        addSecondNum(state, action) {
            // state.entities.push(action.payload),
            state.secondNum = action.payload
        },
        addOperator(state, action) {
            // state.entities.push(action.payload),
            state.operator = action.payload
        },
        addAnswer(state, action) {
            // state.entities.push(action.payload),
            state.answer = action.payload
        },

    }
});

export const dataActions = dataSlice.actions

export default dataSlice.reducer;