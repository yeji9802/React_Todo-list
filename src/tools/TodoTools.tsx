import React from "react";
import styles from "./TodoTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const TodoTools = () => {
  return (
    <section className={styles.container}>
      <button className={styles.button}>
        <IoCheckmarkDoneCircleOutline className={styles.AllIcon} />
        전체 완료
      </button>
      <button className={styles.button}>
        <MdDelete className={styles.AllIcon} />
        전체 삭제
      </button>
    </section>
  );
};

export default TodoTools;
