import React from "react";
import styles from "./TodoInput.module.css";

import { RiChatNewLine } from "react-icons/ri";

const TodoInput = () => {
  return (
    <section className={styles.container}>
      <form className={styles.formContainer}>
        <input type="text" className={styles.input} />
        <button type="submit" className={styles.button}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
