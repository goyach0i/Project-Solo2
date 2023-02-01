import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';
import { errorAlert } from './libs/alert';

let nextId = '';

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insert, setInsert] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '예시) 청소하기',
      checked: true,
    },
    {
      id: nextId,
      text: localStorage.getItem('todoList'),
      checked: false,
    },
  ]);

  const onInsert = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsert((prev) => !prev);
  };

  const onInsertTodo = (text = localStorage.getItem('todoList')) => {
    if (text === '') {
      return errorAlert('할 일을 입력해주세요.');
    } else {
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

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  // 삭제
  const onRemove = (id) => {
    onInsert();
    localStorage.clear();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  // 수정
  const onUpdate = (id, text) => {
    onInsert();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
    console.log(todos);
    localStorage.setItem('todoList', text);
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheck={onCheck}
        onInsert={onInsert}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsert}>
        <MdAddCircle />
      </div>
      {insert && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsert={onInsert}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
}

export default App;
