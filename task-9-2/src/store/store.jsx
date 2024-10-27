import { configureStore } from '@reduxjs/toolkit';
import toDoState from './toDoState';

const store = configureStore({
  reducer: {
    toDoList: toDoState,
  },
});

export default store;
