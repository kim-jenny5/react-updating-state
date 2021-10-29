import React, { Component } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    // console.log(this.state.hasBeenClicked);
    // this.setState({ hasBeenClicked: true }, () =>
    //   console.log(this.state.hasBeenClicked)
    // );
    this.setState((previousState) => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
      };
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
