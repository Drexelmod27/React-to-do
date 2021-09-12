//app.js is a component that holds the logic in one file

import React, { useState } from 'react';
import "./App.css"
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  //value and the function that allows you to change the value
  return(
    <div className="App">
      <header>
        <h1>Mark's To Do List</h1>
      </header>
      <Form setInputText={setInputText}/> 
      <TodoList />
    </div>
  );
}

export default App;
