const Form = (props) => {
  return (
    <form id={props.id} onSubmit={props.onSubmit}>
      <div className="container col-12 mx-auto">
        <h3 className="text-center">Register</h3>
        <div className="container mx-auto"> {props.children}</div>
      </div>
    </form>
  );
};

export default Form;
