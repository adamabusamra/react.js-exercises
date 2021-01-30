import React, { Component } from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

class App extends Component {
  //Object with the form inputs
  state = {
    form: { firstname: "", lastname: "", email: "", password: "" },
    updateType: true,
  };

  //This function catches the event from the form inputs and updates the state on every keyboard change
  liveFormInputs = (e) => {
    console.log(e);
    const curruntField = e.target.name;
    const newState = { ...this.state.form };
    newState[curruntField] = e.target.value;
    this.setState({ form: newState });
  };

  //This function gets the value of the form inputs on submits and appends them to the state
  submitForm = (e) => {
    e.preventDefault();
    const firstname = document.getElementsByName("firstname")[0].value;
    const lastname = document.getElementsByName("lastname")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

    this.setState({
      form: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      },
    });
  };

  //This function sets the updateType in state from true to false and the opposite
  updateType = () => {
    const type = this.state.updateType;
    this.setState({
      //Empty the state when switching between types
      form: { firstname: "", lastname: "", email: "", password: "" },
      //changing the updateType
      updateType: !type,
    });
    //Emptying the foem inputs using reset()
    document.getElementById("form").reset();
  };

  render() {
    let displayData = null;
    if (!this.state.updateType && this.state.form.firstname == "") {
      displayData = null;
    } else {
      /*
       * This variable stores the HTML block that display the outputs
       */
      displayData = (
        <div className="displayData">
          <h4>
            Welcome:
            <span
              style={{ color: "blue" }}
            >{` ${this.state.form.firstname} ${this.state.form.lastname}`}</span>
          </h4>
          <h4>
            Your Email is:{" "}
            <span style={{ color: "tomato" }}>{this.state.form.email}</span>
          </h4>
          <hr />
        </div>
      );
    }
    return (
      <div className="container">
        <h4>
          {"Update type: "}
          <Button
            onClick={this.updateType}
            class={this.state.updateType ? "info btn-sm" : "success btn-sm"}
            text={this.state.updateType ? "Live Update" : "On Submit"}
          />
        </h4>
        <hr />

        {/* this is where we want to display the outputs variable */}
        {displayData}

        {/* here we are nesting input components inside the form component */}
        <Form id="form" onSubmit={this.submitForm}>
          <Input
            id=""
            name="firstname"
            label="Firstname"
            onChange={this.state.updateType ? this.liveFormInputs : null}
          />
          <Input
            name="lastname"
            label="Lastname"
            onChange={this.state.updateType ? this.liveFormInputs : null}
          />
          <Input
            name="email"
            label="Email Address"
            onChange={this.state.updateType ? this.liveFormInputs : null}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.state.updateType ? this.liveFormInputs : null}
            type="password"
          />
          <div className="d-flex justify-content-center">
            {/* The submit button will only show if the updateType is submit */}
            {!this.state.updateType ? (
              <Button
                onChange={this.submitForm}
                class="primary mt-2"
                text="Submit"
                type="submit"
              />
            ) : null}
          </div>
        </Form>
      </div>
    );
  }
}
export default App;
