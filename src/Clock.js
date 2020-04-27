import React, { Component, Fragment } from "react";
import FormettedTime from "./FormettedTime";

export default class Clock extends Component {
  //Initialize states and fetch paraent constructor
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //Call after first component is mounted in Dom
  componentDidMount() {
    this.digiTimerID = setInterval(() => this.updateTime(), 1000);
  }

  //call just before remove the clock components
  componentWillUnmount() {
    clearInterval(this.digiTimerID);
  }

  updateTime() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <Fragment>
        {/* <p className="App-header">Welcome, Guest!</p> */}
        <small>The Time is </small>
        <h1>
          <FormettedTime cutterntTime={this.state.date} />
        </h1>
      </Fragment>
    );
  }
}
