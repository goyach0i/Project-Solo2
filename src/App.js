import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

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
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button" onClick={onInsert}>
        <MdAddCircle />
      </div>
      {insert && <TodoInsert onInsert={onInsert} />}
    </Template>
  );
}

export default App;
