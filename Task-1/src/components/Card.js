import React from "react";
import "../card.css";

const Card = ({
  userImage,
  bgImage,
  name,
  address,
  bio,
  linkedin,
  facebook,
  github,
  deleteFunc,
}) => {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img src={bgImage} className="card-img-top" alt="Background image" />
        <img
          src={userImage}
          className="user-img rounded-circle"
          alt="This is the sudents picture"
        />
        <div className="card-body mt-5">
          <i class="fas fa-times remove" onClick={deleteFunc}></i>
          <h6 className="card-title">{name}</h6>
          <small className="light-text mb-5">{address}</small>
          <p className="card-text mt-1">{bio}</p>
          <div className="icons mt-5">
            <a target="_blank" href={facebook} className="m-2">
              <i class="fab fa-facebook"></i>
            </a>
            <a target="_blank" href={linkedin} className="m-2">
              <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href={github} className=" m-2">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
