/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import TodoType from 'src/types/toDo';

const initialState: TodoType[] = [];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<TodoType>) => {
      state = state.filter((todo) => {
        return todo.work !== action.payload.work;
      });
    },
  },
});

export const { add, remove } = todoListSlice.actions;

export const selectTodoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
