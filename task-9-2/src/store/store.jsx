import { configureStore } from '@reduxjs/toolkit';
import toDoState from './toDoState';

const store = configureStore({
  reducer: {
    toDo: toDoState,
  },
});

export default store;
