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

  const handleCheckedClick = (id: number) => {
    console.log("click", id);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemoveClick = (id: number) => {
    console.log("remove", id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleCheckedAllClick = () => {};

  const handleRemoveAllClick = () => {
    setTodos([]);
  };

  return (
    <main className="App">
      <TodoHeader count={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoTools
          onCheckedAllClick={handleCheckedAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todos}
          onCheckedClick={handleCheckedClick}
          onRemoveClick={handleRemoveClick}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
