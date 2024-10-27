import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from './toDoListSlice';

const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});

export default store;
