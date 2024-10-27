import { createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [{id:0, text: 'homework', completed: false}, {id:1,text: 'gardening'}],
  },
  reducers: {addToDo: (state, action) => {
      const {id, text} = action.payload;// HERE
      state.push({id: id, text: text, completed: false}), // push the string to the new array item
      state.push(false)//push the checkbox item as unchecked when its created
    },
    editToDo: (state, action) => {
      const {id, text} = action.payload;
      state.map((item)=> {
        // for each item, if the item id matches the id of the payload item (the item being selected to edit):
        if (item.id == id) {
          return {...item, text} // return the item unmodified (using spread syntax) with an updated text field

        } else {
          return item // otherwise just return the item unmodified and continue flipping through the whole toDoList until the item is found.
        }
      })
     
    },
    checkToDo: (state, action) => {

state.splice()
    }
  }
);

export const { addToDo, editToDo, checkToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;
