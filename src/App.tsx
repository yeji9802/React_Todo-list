import React, { useState } from "react";
import "./App.css";
import Divider from "./divider/Divider";
import TodoHeader from "./header/TodoHeader";
import TodoInput from "./input/TodoInput";
import TodoList from "./list/TodoList";
import TodoListArea from "./list/TodoListArea";
import TodoTools from "./tools/TodoTools";

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    if (!text) return;
    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });

    setTodos(newTodos);

    setText("");
  };

  return (
    <main className="App">
      <TodoHeader />
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoTools />
        <Divider />
        <TodoList todos={todos} />
      </TodoListArea>
    </main>
  );
}

export default App;
