import React from "react";
import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <header>
      <h1 className={styles.title}>
        {" "}
        <mark className={styles.count}>5</mark>개의 할 일
      </h1>
    </header>
  );
};

export default TodoHeader;
