const Input = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-2 mx-auto">
      <label classNameName="text-left" for="validationCustom02 ">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export default Input;
