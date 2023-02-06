import React, { ChangeEvent, FormEvent } from "react";
import styles from "./TodoInput.module.css";

import { RiChatNewLine } from "react-icons/ri";

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

const TodoInput = (props: TodoInputProps) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(e.target.value);
    console.log(props.text);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={props.text}
          onChange={handleTextChange}
        />
        <button type="submit" className={styles.button}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
