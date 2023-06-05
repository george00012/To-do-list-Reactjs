import { useState } from "react";

const Task = (props) => {
  const { task, onDelete } = props;

  const [editTask, setEditTask] = useState(false);

  const [value, setValue] = useState(task.task);

  const handleSave = () => {
    setEditTask( false);
    props.onSave(task.id, value);
  };


  return (
    <div className="task" id={task.id}>
      {editTask ? (
        <>
          <input
          className="task-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn-save" onClick={handleSave}>
            Save
          </button>
          <button className="btn-delete" onClick={()=> onDelete(task.id)}>Delete</button>
        </>
      ) : (
        <>
          <span className="task-span">{task.task}</span>
          <button className="btn btn-edit" onClick={() => setEditTask(true)}>
            Edit
          </button>
          <button className="btn btn-borrar" onClick={()=> onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
