import { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Column from 'src/components/Grid/Column';
import Row from 'src/components/Grid/Row';
import Input from 'src/components/base/Input';
import MyButton from 'src/components/MyButton';
import { selectTodoList, add } from 'src/redux/reducer/todo';

import Todo from './Todo';

import { P, Number, TodoList, Title } from './style';

function ReduxTodoList(): ReactElement {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(add({ work: todoInput, check: false }));
    setTodoInput('');
  };

  return (
    <Column padding="36px">
      <p>Redux TodoList</p>
      <Row padding="16px">
        <Input
          width="300px"
          placeholder="할일을 입력하세요."
          onChange={handleChange}
          value={todoInput}
        />
        <MyButton onClick={handleAddTodo}>add</MyButton>
      </Row>
      <Row padding="4px">
        <P>총 할 일:</P>
        <Number>{todoList.length.toString()}</Number>
        <P>개</P>
      </Row>
      <Row padding="4px">
        <P>남은 일:</P>
        <Number>{todoList.filter((todo) => !todo.check).length}</Number>
        <P>개</P>
        <P />
        <P />
        <P />
        <P />
        <P>다한 일:</P>
        <Number done>{todoList.filter((todo) => todo.check).length}</Number>
        <P>개</P>
      </Row>
      <TodoList>
        <Title>Todo List</Title>
        {todoList.map((todo, index) => (
          <Todo key={todo.work + index.toString()} todo={todo} />
        ))}
      </TodoList>
    </Column>
  );
}

export default ReduxTodoList;
