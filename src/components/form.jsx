const Formulario = (props) => {
    const {task, handleSubmit, handleChange} = props;

    return (
        <form className="formulario">
            <input type="text" placeholder="Add task"
                onChange={handleChange}
                value={task}
                className="add"/>
            <button type="submit" className="btn-submit" value="add"
                onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
};

export default Formulario;
