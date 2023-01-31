import React from 'react';
import Todoitem from './TodoItem';
import '../components/TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todoitem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
