import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from './toDoListSlice';
import countSlice from './counterSlice';
import modalSlice from './modalSlice';

const store = configureStore({
    reducer: {
        toDoList: toDoListReducer,
        count: countSlice,
        modal: modalSlice,
    },
});

export default store;
