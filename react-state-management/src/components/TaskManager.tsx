import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [text, setText] = useState<string>("");
  const { theme } = useTheme();

  const addTask = (): void => {
    if (text.trim() === "") return;
    dispatch({ type: "add", payload: text.trim() });
    setText("");
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <label htmlFor="task-input">New task: </label>
      <input
        id="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
        placeholder="Enter a task"
      />
      <button type="button" className={styles.button} onClick={addTask}>
        Add Task
      </button>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <span>{task.text}</span>
            <button
              type="button"
              className={styles.button}
              aria-label={`Remove task: ${task.text}`}
              onClick={() => dispatch({ type: "remove", payload: task.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;