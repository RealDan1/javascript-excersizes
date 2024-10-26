import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {toDoItems: [],toDoCheck: []},
  },
  reducers: {
    add: (state, action) => {
      state.toDoItems.push(action.payload), // push the string to the new array item
      state.toDoItems.push(false),//push the checkbox item as unchecked when its created
    },
    edit: (state, action) => {
      //something here that i dont understand yet
      state.toDoItems.splice();
    },
    check: (state, action) => {

state.toDoCheck.splice()//maybe splice in "true" at the index of action.payload somehow? see i havent even seen how i would get this input at the correct index yet from a standard JS/html input box let alone in react with redux

    }
  },
});

export const { add, edit } = toDoSlice.actions;
export default toDoSlice.reducer;
