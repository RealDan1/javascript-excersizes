import { createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [
    { id: 0, text: 'Homework', completed: false },
    { id: 1, text: 'Gardening', completed: false },
  ],
  reducers: {
    // HERE
    addToDo: (state, action) => {
      const { id, text } = action.payload; // HERE
      state.push({ id: id, text: text, completed: false }); // push the string to the new array item
      state.push(false); // push the checkbox item as unchecked when its created
    },
    editToDo: (state, action) => {
      const { id, text } = action.payload; // deconstruct the payload
      state.map((item) => {
        if (item.id === id) {
          //for each item in the state array: if the item id matches the id inside the payload:
          return { ...item, text }; // return a copy of the original item object, plus a modified text field
        } else {
          return item; //otherwise just return the original item and keep flipping through the state until the item is found
        }
      });
    },
    checkToDo: (state, action) => {
      const { id } = action.payload; //deconstruct the payload
      state.map((item) => {
        // flip through the whole state array as done previously
        if (item.id === id) {
          //for each item if the id matches:
          return { ...item, completed: true }; // return the original item plus a modified "completed" field
        } else {
          return item; //otherwise keep flipping through the array
        }
      });
    },
    unCheckToDo: (state, action) => {
      const { id } = action.payload; // deconstruct the payload
      state.map((item) => {
        // flip through the whole state array as done previously
        if (item.id === id) {
          //for each item if the id matches:
          return { ...item, completed: true }; // return the original item plus a modified "completed" field
        } else {
          return item; //otherwise keep flipping through the array
        }
      });
    },
  },
});

export const { addToDo, editToDo, checkToDo, unCheckToDo } =
  toDoListSlice.actions;
export default toDoListSlice.reducer;
