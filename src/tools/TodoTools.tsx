import React from "react";
import styles from "./TodoTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CgRadioCheck } from "react-icons/cg";

interface TodoToolsProps {
  isAllChecked: boolean;
  onCheckedAllClick: () => void;
  onRemoveAllClick: () => void;
}

const TodoTools = (props: TodoToolsProps) => {
  const handleCheckedAllClick = () => {
    props.onCheckedAllClick();
  };
  const handleRemoveAllClick = () => {
    props.onRemoveAllClick();
  };

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleCheckedAllClick}>
        {props.isAllChecked ? (
          <>
            <CgRadioCheck className={styles.AllIcon} /> 전체 해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.AllIcon} /> 전체
            완료
          </>
        )}
      </button>
      <button className={styles.button} onClick={handleRemoveAllClick}>
        <MdDelete className={styles.AllIcon} />
        전체 삭제
      </button>
    </section>
  );
};

export default TodoTools;
