import React, { useState, useEffect } from "react";
import List from "./List";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setIsEditId] = useState(null);
  const [alert, setAlert] = useState({});
  return (
    <div className="section-center">
      <form className="grocery-form"></form>
      <div className="grocer-container"></div>
      <List />
    </div>
  );
}

export default App;
