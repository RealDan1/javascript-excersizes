import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modalText',
    initialState: '', // default is two since there are already two items in the list by default
    reducers: {
        editModalText: (state, action) => {
            state = action.payload;
        },
    },
});

export const { increment, decrement } = modalSlice.actions;
export default modalSlice.reducer;
