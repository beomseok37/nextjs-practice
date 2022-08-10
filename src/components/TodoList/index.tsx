import React, { useContext } from 'react';

import Todo from 'src/components/Todo';
import { TodoStateContext } from 'src/hooks/context/TodoContext';

import styles from './index.module.scss';

const TodoList = (): React.ReactElement => {
  const todoState = useContext(TodoStateContext);
  console.log(todoState);
  return (
    <div className={styles.wrapper}>
      <div className={styles.todoList_header}>
        <span>해야할 일</span>
        <span>{todoState.length}</span>
      </div>
      <div className={styles.todoList_wrapper}>
        {todoState.map((todo) => (
          <Todo
            name={todo.name}
            description={todo.description}
            key={todo.id}
          ></Todo>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
