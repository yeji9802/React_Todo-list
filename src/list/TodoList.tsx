import React from "react";
import TodoListItem from "../listItem/TodoListItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const arr = ["html", "css", "JavaScript"];

  return (
    <section className={styles.container}>
      <ol className={styles.todoList}>
        {arr.map((item, index) => {
          return <TodoListItem key={index} item={item} />;
        })}
      </ol>
    </section>
  );
};

export default TodoList;
