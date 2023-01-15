import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list }) => {
  return (
    <div className="grocery-list">
      {list.map((item, idx) => {
        const { id, name } = item;
        return (
          <article className="grocery-item" key={idx}>
            <p className="title">{name}</p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn">
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
