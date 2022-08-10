import React, { useState } from 'react';

interface props {
  name: string;
  description: string;
}

const Todo = ({ name, description }: props): React.ReactElement => {
  return (
    <div className="todo-wrapper">
      <span>{name}</span>
      <span>{description}</span>
      <input type="checkbox" />
    </div>
  );
};

export default Todo;
