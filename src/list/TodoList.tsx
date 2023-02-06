import React from "react";
import { TodoType } from "../App";
import TodoListItem from "../listItem/TodoListItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
  onCheckedClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <section className={styles.container}>
      <ol className={styles.todoList}>
        {props.todos.map((todo, index) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
              onCheckedClick={props.onCheckedClick}
              onRemoveClick={props.onRemoveClick}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default TodoList;
