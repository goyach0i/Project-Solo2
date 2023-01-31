import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './css/Todoitem.css';

const Todoitem = ({ todo, onCheck }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheck(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheck(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Todoitem;
