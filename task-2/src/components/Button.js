const Button = (props) => {
  return (
    <button
      className={`mx-auto btn btn-${props.class}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
