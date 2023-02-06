import React from "react";
import { TodoType } from "../App";
import TodoListItem from "../listItem/TodoListItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <section className={styles.container}>
      <ol className={styles.todoList}>
        {props.todos.map((todo, index) => {
          return (
            <TodoListItem
              key={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default TodoList;
