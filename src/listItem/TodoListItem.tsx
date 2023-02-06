import React from "react";
import styles from "./TodoListItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoListItemProps {
  item: string;
}

const TodoListItem = (props: TodoListItemProps) => {
  const isCheck = false;

  return (
    <>
      <li className={styles.container}>
        <BsCheckCircle
          className={[
            styles.checkIcon,
            `${isCheck ? styles.checkedIcon : styles.unCheckedIcon}`,
          ].join(" ")}
        />
        <span>{props.item}</span>
        <IoIosRemoveCircleOutline className={styles.removeIcon} />
      </li>
    </>
  );
};

export default TodoListItem;
