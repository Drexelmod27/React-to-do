import React from "react";
//Import components
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  // console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          todo={todo}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default TodoList;
