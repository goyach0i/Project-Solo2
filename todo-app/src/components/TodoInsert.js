import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './css/TodoInsert.css';
import { errorAlert } from '../libs/alert';

const TodoInsert = ({ onInsert, onInsertTodo }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    if (setValue !== '') {
      e.preventDefault();
      onInsertTodo(localStorage.setItem('todoList', value));
      setValue('');
      onInsert();
    } else {
      return errorAlert('할 일을 입력해주세요.');
    }
  };
  return (
    <div className="add-todo">
      <div className="background" onClick={onInsert}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력해주세요."
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
