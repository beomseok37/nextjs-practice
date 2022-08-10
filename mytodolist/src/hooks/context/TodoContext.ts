import { createContext, Dispatch, useContext } from 'react';

import TodoType from 'src/types/todo';
import { ActionType } from 'src/types/index';

const initialState: TodoType[] = [
  { name: '할일 1', description: 'Agile soda에 출근', id: 1 },
];

const TodoStateContext = createContext(initialState);
const TodoDispatchContext = createContext<Dispatch<ActionType> | null>(null);

const useTodoState = () => useContext(TodoStateContext);
const useTodoDispatch = () => useContext(TodoDispatchContext);

export {
  TodoStateContext,
  TodoDispatchContext,
  useTodoState,
  useTodoDispatch,
  initialState,
};
