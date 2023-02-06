import React from "react";
import styles from "./TodoListItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoListItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onCheckedClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoListItem = (props: TodoListItemProps) => {
  const handleCheckedClick = () => {
    props.onCheckedClick(props.id);
  };
  const handleRemoveClick = () => {
    props.onRemoveClick(props.id);
  };

  return (
    <>
      <li className={styles.container}>
        <BsCheckCircle
          className={[
            styles.checkIcon,
            `${props.isChecked ? styles.checkedIcon : styles.unCheckedIcon}`,
          ].join(" ")}
          onClick={handleCheckedClick}
        />
        <span className={props.isChecked ? styles.linethrough : ""}>
          {props.text}
        </span>
        <IoIosRemoveCircleOutline
          className={styles.removeIcon}
          onClick={handleRemoveClick}
        />
      </li>
    </>
  );
};

export default TodoListItem;
