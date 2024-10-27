import { createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [
    { id: 0, text: 'homework', completed: false },
    { id: 1, text: 'gardening', completed: false },
  ],
  reducers: {
    // HERE
    addToDo: (state, action) => {
      const { id, text } = action.payload; // HERE
      state.push({ id: id, text: text, completed: false }); // push the string to the new array item
      state.push(false); // push the checkbox item as unchecked when its created
    },
    editToDo: (state, action) => {
      const { id, text } = action.payload;
      state.map((item) => {
        if (item.id === id) {
          return { ...item, text };
        } else {
          return item;
        }
      });
    },
    checkToDo: (state, action) => {
      state.splice();
    },
  },
});

export const { addToDo, editToDo, checkToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;
