import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';
import { errorAlert } from './libs/alert';

let nextId = 4;

function App() {
  const [insert, setInsert] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    },
  ]);

  const onInsert = () => {
    setInsert((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    text = localStorage.getItem('todoList');
    if (text === '') {
      return errorAlert('할 일을 입력해주세요.');
    } else {
      text = localStorage.getItem('todoList');
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheck = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheck={onCheck} />
      <div className="add-todo-button" onClick={onInsert}>
        <MdAddCircle />
      </div>
      {insert && <TodoInsert onInsert={onInsert} onInsertTodo={onInsertTodo} />}
    </Template>
  );
}

export default App;
