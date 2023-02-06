import React, { useReducer } from "react";
import "./App.css";
import TodoHeader from "./header/TodoHeader";
import TodoInput from "./input/TodoInput";
import TodoTools from "./tools/TodoTools";
import Divider from "./divider/Divider";
import TodoListArea from "./list/TodoListArea";
import TodoList from "./list/TodoList";
import { todoInputReducer } from "./todo/todoInputReducer";
import { todoReducer } from "./todo/todoReducer";

function App() {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: "change",
      payload: text,
    });
  };

  const handleSubmit = () => {
    if (!inputState.text) return;

    todoDispatch({
      type: "add",
      payload: { text: inputState.text },
    });

    // setTodos(newTodos);

    inputDispatch({
      type: "clear",
    });
  };

  const handleCheckedClick = (id: number) => {
    todoDispatch({
      type: "checked",
      payload: { id: id },
    });
  };

  const handleRemoveClick = (id: number) => {
    todoDispatch({
      type: "remove",
      payload: { id: id },
    });
  };

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleCheckedAllClick = () => {
    const isAllChecked = isTodoAllChecked();

    todoDispatch({
      type: "allChecked",
      payload: isAllChecked,
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: "allRemove",
    });
  };

  return (
    <main className="App">
      <TodoHeader
        count={todoState.todos.filter((todo) => !todo.isChecked).length}
      />
      <TodoInput
        text={inputState.text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoTools
          isAllChecked={isTodoAllChecked()}
          onCheckedAllClick={handleCheckedAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todoState.todos}
          onCheckedClick={handleCheckedClick}
          onRemoveClick={handleRemoveClick}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
