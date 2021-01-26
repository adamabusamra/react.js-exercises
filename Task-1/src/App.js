import React, { Component } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import swal from "sweetalert";

class App extends Component {
  //Array with 5 students and their info
  state = {
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
        userImage: "../images/adam.png",
        bgImage: "../images/bg1.jpg",
        address: "Amman, Jordan",
        bio: "Im a Web-Developer",
        linkedin: "https://www.linkedin.com/in/adam-abusamra/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 5,
        name: "Firas Diab",
        userImage:
          "https://scontent.famm7-1.fna.fbcdn.net/v/t31.0-8/22770834_1634613739932801_7646243513244540913_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_eui2=AeGOcYRsSwDrFKey8cfNGmvd6Ehid6hww9_oSGJ3qHDD3yWivE52_jnDus66lfQNhQpaycf3Ep-K571yws0NsIY1&_nc_ohc=7EbNT7otILsAX_p7T1b&_nc_ht=scontent.famm7-1.fna&oh=882de68e58cf2e290e08b905ead25fbc&oe=6033DBCD",
        bgImage: "../images/bg4.jpg",
        address: "Amman, Jordan",
        bio: "3absi",
        linkedin: "https://www.linkedin.com/in/firas-diab/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 4,
        name: "Laith Enooz",
        userImage: "../laith.jfif",
        bgImage: "../images/bg3.jpeg",
        address: "Amman, Jordan",
        bio: "Any more Tasks?",
        linkedin: "https://www.linkedin.com/in/laithalenooz/",
        github: "https://github.com/adamabusamra",
        facebook: "https://www.facebook.com/JordanCivilDefense",
      },
      {
        id: 3,
        name: "Mohammad Yaqoub",
        userImage:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFivRZGiqQABg/profile-displayphoto-shrink_400_400/0/1600874534239?e=1616630400&v=beta&t=OWy-CWE_pxmF0Q4UEhMJKgNWw2uV7p6U67Zag4oboR4",
        bgImage: "../images/bg2.jpg",
        address: "Amman, Jordan",
        bio: "Hello I Love Tea",
        linkedin: "https://www.linkedin.com/in/mohammadyacoub/",
        github: "https://github.com/moh-yacoub",
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
        console.log(this.state.students);
        swal(`The user: ${student.name} has been deleted!`, {
          icon: "success",
        });
      }
    });
  };
  updateStudents = (event, index) => {
    // this.state.students.map((student, index) => {
    // });
    const newStudents = [...this.state.students];
    newStudents[index].name = event.target.value;
    this.setState({ students: newStudents });
  };

  // React lifecycle

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
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Component will update", nextProps, nextState);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Component did update", prevProps, prevState);
  // }

  // componentWillUnmount() {
  //   console.log("Component will unmount");
  // }

  render() {
    console.log("Render");
    //This checks the show value(Which is toggled by the displayCards func) to display the students cards.
    let students = null;
    if (this.state.show) {
      students = (
        <div className="row">
          {this.state.students.map((student, index) => {
            // const index1 = index;
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
                key={student.id}
              >
                <Input
                  value={student.name}
                  onChange={(e) => this.updateStudents(e, index)}
                />
              </Card>
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
