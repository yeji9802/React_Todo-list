import React from "react";
import "./App.css";
import Divider from "./divider/Divider";
import TodoHeader from "./header/TodoHeader";
import TodoInput from "./input/TodoInput";
import TodoList from "./list/TodoList";
import TodoTools from "./tools/TodoTools";

function App() {
  return (
    <main className="App">
      <TodoHeader />
      <TodoInput />
      <TodoTools />
      <Divider />
      <TodoList />
    </main>
  );
}

export default App;
