// Making first component

import React from "react"; //this is how we can use react

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  //Here I can write JS code and function
    ///////////Input Handler Function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
    ///////////Submit Handler Function
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText(""); //sets the state back to zero
  };
  ///////////Status Handler Function
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
 
  ////////////////////////////////////////////////////////////////////////
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
