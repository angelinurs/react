import { createSlice } from '@reduxjs/toolkit'

const numberSlice = createSlice( {
    name : 'numberCounter',
    initialState : {
        num : 0
    },
    reducers:{
        increaseNumber: function( state, action ) {
            state.num += 1;
        },
        decreaseNumber: function( state, action ) {
            state.num -= 1;
        }
    }
});

export const{ increaseNumber, decreaseNumber } = numberSlice.actions;

export default numberSlice.reducer;