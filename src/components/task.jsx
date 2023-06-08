import { useState } from "react";

const Task = (props) => {
  const { task, onDelete } = props;

  const [editTask, setEditTask] = useState(false);

  const [value, setValue] = useState(task.task);

  const handleSave = () => {
    setEditTask(false);
    props.onSave(task.id, value);
  };

  return (
    <div className="task" id={task.id}>
      <div className="general">
        {editTask ? (
          <div className="task-list listas">
            <input
              className="task-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="btn-btn">
              <button className="btn btn-save" onClick={handleSave}></button>
              <button
                className="btn btn-delete delete"
                onClick={() => onDelete(task.id)}
              ></button>
            </div>
          </div>
        ) : (
          <div className="task-span listas">
            <div className="span-task">{task.task}</div>

            <div className="btn-container">
              <button
                className="btn btn-edit save"
                onClick={() => setEditTask(true)}
              ></button>
              <button
                className="btn btn-delete save"
                onClick={() => onDelete(task.id)}
              ></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
