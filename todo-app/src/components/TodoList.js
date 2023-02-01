import React from 'react';
import Todoitem from './TodoItem';
import './css/TodoList.css';

const TodoList = ({ todos, onCheck, onInsert, onChangeSelectedTodo }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todoitem
          todo={todo}
          key={todo.id}
          onCheck={onCheck}
          onInsert={onInsert}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
