import React, { Component } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import swal from "sweetalert";

class App extends Component {
  state = {
    //Array with 5 students and their info
    students: [
      // {
      //   id: 1,
      //   name: "Mr.Balaha",
      //   userImage: "../profile.jpg",
      //   bgImage: "././bg.jpg",
      //   address: "Amman, Jordan",
      //   bio: "Im the famous Balaha !",
      //   linkedin: "https://www.linkedin.com/in/adam-abusamra/",
      //   github: "https://github.com/adamabusamra",
      //   facebook: "https://www.facebook.com/JordanCivilDefense",
      // },
      {
        id: 2,
        name: "Adam Abusamra",
        userImage: "../adam.png",
        bgImage: "././bg1.jpg",
        address: "Amman, Jordan",
        bio: "Im a Web-Developer",
        linkedin: "https://www.linkedin.com/in/adam-abusamra/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 3,
        name: "Mohammad Yaqoub",
        userImage:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFivRZGiqQABg/profile-displayphoto-shrink_400_400/0/1600874534239?e=1616630400&v=beta&t=OWy-CWE_pxmF0Q4UEhMJKgNWw2uV7p6U67Zag4oboR4",
        bgImage: "././bg2.jpg",
        address: "Amman, Jordan",
        bio: "Hello I Love Tea",
        linkedin: "https://www.linkedin.com/in/mohammadyacoub/",
        github: "https://github.com/moh-yacoub",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 4,
        name: "Laith Enooz",
        userImage: "../laith.jfif",
        bgImage: "././bg3.jpeg",
        address: "Amman, Jordan",
        bio: "Any more Tasks?",
        linkedin: "https://www.linkedin.com/in/laithalenooz/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 5,
        name: "Mohammad Shatnawi",
        userImage:
          "https://media-exp1.licdn.com/dms/image/C5603AQH8LNvBrB8WVA/profile-displayphoto-shrink_400_400/0/1579708721002?e=1616630400&v=beta&t=VRMmiOjcgbeR9ZYAvOebxfXUXDEwrIsvtwXIhMYz0Tg",
        bgImage: "././bg4.jpg",
        address: "Amman, Jordan",
        bio: "Im a engineer",
        linkedin: "https://www.linkedin.com/in/mohammed-alshatnawi/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
    ],
    show: false,
  };
  //This function sets the show value from true to false and the opposite
  displayCards = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow });
  };
  //This function recives the user index and deletes it
  deleteStudent = (index, student) => {
    //This is just a sweet alert to get the users confirmation it uses somthing called JS promises by using ".then()"
    swal({
      title: "Are you sure?",
      text: `Do you want to delete the user: ${student.name}`,
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //We get the array in state and store it in a new array using the JS spread
        const newStudents = [...this.state.students];
        //We then splice a specific student based on the index we recived
        newStudents.splice(index, 1);
        //We set the students array in state to our new array
        this.setState({ students: newStudents });
        swal(`The user: ${student.name} has been deleted!`, {
          icon: "success",
        });
      }
    });
  };

  render() {
    //This checks the show value(Which is toggled by the displayCards func) to display the students cards.
    let students = null;
    if (this.state.show) {
      students = (
        <div className="row">
          {this.state.students.map((student, index) => {
            return (
              <Card
                userImage={student.userImage}
                bgImage={student.bgImage}
                name={student.name}
                address={student.address}
                bio={student.bio}
                linkedin={student.linkedin}
                github={student.github}
                facebook={student.facebook}
                deleteFunc={() => this.deleteStudent(index, student)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="container">
        <Button
          text={this.state.show ? "Hide Students" : "Show Students"}
          color={this.state.show ? "warning" : "primary"}
          onClick={this.displayCards}
        />
        {/* This is the result of the if statement if show == true the cards will be displayed here else its null */}
        {students}
      </div>
    );
  }
}

export default App;

/* <Card
            userImage="../profile.jpg"
            bgImage="././background.jpg"
            name="Adam Abusamra"
            address="Amman, Jordan"
            bio="Im a backend developer"
            linkedin="#"
            github="#"
            facebook="#"
          /> */
