import React, { Component, createContext } from "react";

export const ValueContext = createContext();

class Context extends Component {
  state = {
    user: {},
    email: "",
    password: "",
    isChecked: false,
    profileImage: [],
    board: [],
  };

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password,
      });
    }
  }

  // updateEmailAndPassword = (email, password) => {
  //   this.setState({
  //     email: email,
  //     password: password,
  //   });
  // };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeCheckbox = (event) => {
    this.setState({
      isChecked: event.target.checked,
    });
  };

  loginSubmit = () => {
    const { email, password, isChecked } = this.state;
    if (isChecked && email !== "") {
      localStorage.username = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  setProfileImage = (e) => this.setState({ profileImage: e });

  setBoard = (e) => this.setState({ board: e });

  render() {
    return (
      <ValueContext.Provider
        value={{
          ...this.state,
          setUser: this.setUser,
          onChangeValue: this.onChangeValue,
          onChangeCheckbox: this.onChangeCheckbox,
          loginSubmit: this.loginSubmit,
          setProfileImage: this.setProfileImage,
          setBoard: this.setBoard,
        }}
      >
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

export default Context;
