import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './css/TodoInsert.css';
import { errorAlert } from '../libs/alert';
import { TiTrash, TiPencil } from 'react-icons/ti';

const TodoInsert = ({
  onInsert,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    if (setValue !== '') {
      e.preventDefault();
      onInsertTodo(
        localStorage.setItem('todoList', JSON.stringify({ text: value })),
      );
      // localStorage.setItem('todoList', value);
      // onInsertTodo(value);
      setValue('');
      onInsert();
    } else {
      errorAlert('할 일을 입력해주세요.');
      return localStorage.clear();
    }
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div className="add-todo">
      <div className="background" onClick={onInsert}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="할 일을 입력해주세요."
          value={value}
          onChange={onChange}
        />
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
