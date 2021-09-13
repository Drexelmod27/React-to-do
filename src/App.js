//app.js is a component that holds the logic in one file

import React, { useState } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  //value and the function that allows you to change the value
  const [inputText, setInputText] = useState("");
  //need to store todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Mark's To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
