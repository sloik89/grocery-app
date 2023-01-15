import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setIsEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      handleAlert(true, "write somethin", "danger");
      console.log("nie ma wartosc");
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), name };
      setList([...list, newItem]);
      setName("");
      handleAlert(true, "Item added", "success");
      console.log(list);
    }
  };
  const handleAlert = (show, msg, type) => {
    setAlert({ show: show, msg: msg, type: type });
  };
  return (
    <div className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} handle={handleAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g.eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocer-container"></div>
      <List list={list} />
      <button
        onClick={() => {
          setList([]);
        }}
        className="clear"
      >
        clear items
      </button>
    </div>
  );
}

export default App;
