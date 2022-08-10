import { ReactElement, useReducer } from 'react';
import {
  initialState,
  TodoDispatchContext,
  TodoStateContext,
} from 'src/hooks/context/TodoContext';
import { todoReducer } from 'src/hooks/reducer/TodoReducer';
import TodoInput from 'src/components/TodoInput';
import TodoList from 'src/components/TodoList';

const TodoWrapper = (): ReactElement => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoWrapper;
