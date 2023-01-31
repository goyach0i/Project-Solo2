import React from 'react';
import Todoitem from './TodoItem';
import './css/TodoList.css';

const TodoList = ({ todos, onCheck }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todoitem todo={todo} key={todo.id} onCheck={onCheck} />
      ))}
    </div>
  );
};

export default TodoList;
