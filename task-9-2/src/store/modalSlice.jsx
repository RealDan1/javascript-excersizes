import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modalText',
    initialState: { input: '' }, // default is two since there are already two items in the list by default
    reducers: {
        editModalText: (state, action) => {
            state.input = action.payload;
        },
    },
});

export const { editModalText } = modalSlice.actions;
export default modalSlice.reducer;
