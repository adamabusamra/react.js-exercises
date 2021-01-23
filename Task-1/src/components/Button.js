const Button = ({ text, onClick, color }) => {
  return (
    <div>
      <button
        className={`btn btn-${color} my-3 mx-auto d-block`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
