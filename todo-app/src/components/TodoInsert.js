import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
  return (
    <div>
      <div className="background" onClick={onInsert}></div>
      <form>
        <input type="text" />
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
