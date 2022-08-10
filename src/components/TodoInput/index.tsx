import { ReactElement, useState, useContext } from 'react';

import { TodoDispatchContext } from 'src/hooks/context/TodoContext';
import { TodoStateContext } from 'src/hooks/context/TodoContext';

const TodoInput = (): ReactElement => {
  console.log('TodoInput');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const todoDispatch = useContext(TodoDispatchContext);
  const todoState = useContext(TodoStateContext);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTodoList = () => {
    todoDispatch({
      type: 'CREATE',
      todo: { id: todoState.length + 1, name, description },
    });
    console.log(name, description);
  };

  return (
    <div className="input-wrapper">
      <div className="content-wrapper">
        <span>title</span>
        <input type="text" id="name" onChange={handleNameChange} />
        <span>description</span>
        <input
          type="text"
          id="description"
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="button" onClick={addTodoList}>
        제출
      </button>
    </div>
  );
};

export default TodoInput;
