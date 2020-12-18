import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function createListItem(text) {
  return <ListItem text={text} />;
}

function App() {
  const [input, updateInput] = useState("");
  function setInput(event) {
    const newValue = event.target.value;
    updateInput(newValue);
  }
  const [list, addToList] = useState([]);
  function setList() {
    addToList((prevValue) => {
      return [...prevValue, input];
    });
    updateInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setInput} value={input} type="text" />
        <button>
          <span onClick={setList}>Add</span>
        </button>
      </div>
      <div>
        <ul>{list.map(createListItem)};</ul>
      </div>
    </div>
  );
}

export default App;
