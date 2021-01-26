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
  children,
}) => {
  // col-md-4 col-sm-6
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
      <div className="mx-auto card text-center">
        <img src={bgImage} className="card-img-top" alt="Background image" />
        <img
          src={userImage}
          className="user-img rounded-circle mx-auto"
          alt="This is the sudents picture"
        />
        <div className="card-body mt-1">
          <i className="fas fa-times remove" onClick={deleteFunc}></i>
          <h6 className="card-title">{name}</h6>
          <small className="light-text mb-5">{address}</small>
          <p className="card-text mt-1">{bio}</p>
          {/* <div className="mx-auto"></div> */}
          {children}
          <div className="icons mt-2">
            <a target="_blank" href={facebook} className="m-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a target="_blank" href={linkedin} className="m-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href={github} className=" m-2">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React, { Component } from "react";
// import "../card.css";

// class Card extends Component {
//React lifecycle

// componentWillMount() {
//   console.log("Component will mount");
// }

// componentDidMount() {
//   console.log("Component did mount!");
// }

// componentWillReceiveProps(nextProps) {
//   console.log("Component will receive props", nextProps);
// }

// shouldComponentUpdate(nextProps, nextState) {
//   console.log("Should Component update", nextProps, nextState);
//   return false;
// }

// componentWillUpdate(nextProps, nextState) {
//   console.log("Component will update", nextProps, nextState);
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log("Component did update", prevProps, prevState);
// }

//   componentWillUnmount() {
//     console.log("Card Component will unmount");
//   }
//   render() {
//     console.log("Render");
//     return (
//       <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-5">
//         <div className="card text-center">
//           <img
//             src={this.props.bgImage}
//             className="card-img-top"
//             alt="Background image"
//           />
//           <img
//             src={this.props.userImage}
//             className="user-img rounded-circle"
//             alt="This is the sudents picture"
//           />
//           <div className="card-body mt-5">
//             <i
//               className="fas fa-times remove"
//               onClick={this.props.deleteFunc}
//             ></i>
//             <h6 className="card-title">{this.props.name}</h6>
//             <small className="light-text mb-5">{this.props.address}</small>
//             <p className="card-text mt-1">{this.props.bio}</p>
//             <div className="icons mt-5">
//               <a target="_blank" href={this.props.facebook} className="m-2">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a target="_blank" href={this.props.linkedin} className="m-2">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a target="_blank" href={this.props.github} className=" m-2">
//                 <i className="fab fa-github"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
