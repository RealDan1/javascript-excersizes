import { createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {
        list: [
            { content1: 'Content1', completed: false }, // initial to-do items
            { content2: 'Content2', completed: false },
        ],
    },
    reducers: {
        addToDo: (state, action) => {
            const { text, id } = action.payload;
            state.list.push({ id, text, completed: false }); // Add new item to state.list array
        },
        editToDo: (state, action) => {
            const { id, text } = action.payload; // deconstruct the payload
            state.list = state.list.map((item) => {
                if (item.id === id) {
                    return { ...item, text }; // return a copy of the original item object, plus a modified text field
                } else {
                    return item;
                }
            });
        },
        checkToDo: (state, action) => {
            const { id } = action.payload; //deconstruct the payload
            state.list = state.list.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: true }; // set completed to true if item id matches
                } else {
                    return item;
                }
            });
        },
        unCheckToDo: (state, action) => {
            const { id } = action.payload; // deconstruct the payload
            state.list = state.list.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: false }; // set completed to false if item id matches
                } else {
                    return item;
                }
            });
        },
        deleteToDo: (state, action) => {
            const { id } = action.payload;
            state.list = state.list.filter((item) => item.id !== id); // filter out item by id
        },
    },
});

export const { addToDo, editToDo, checkToDo, unCheckToDo, deleteToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;
