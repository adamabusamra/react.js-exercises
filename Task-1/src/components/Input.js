import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <div className="row g-3 align-items-center">
      <div className="col-auto mx-auto">
        <input
          type="text"
          className="form-control text-center"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
