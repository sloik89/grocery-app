import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, handleDelete, edit }) => {
  return (
    <div className="grocery-list">
      {list.map((item, idx) => {
        const { id, name } = item;
        return (
          <article className="grocery-item" key={idx}>
            <p className="title">{name}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => edit(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => handleDelete(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
