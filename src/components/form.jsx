const Formulario = (props) => {
  const { task, handleSubmit, handleChange } = props;

  return (
    <div className="form">
    <form className="formulario">
      <input
        type="text"
        placeholder="Add task"
        onChange={handleChange}
        value={task}
        className="add"
      />
      <button
        type="submit"
        className="btn btn-submit"
        value="add"
        onClick={handleSubmit}
      ></button>
    </form>
    </div>
  );
};

export default Formulario;
