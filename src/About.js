import React from "react";

import Profile from "./assets/images/Profile.jpg";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      let today = new Date();
      let Time = today.getHours() + ":" + today.getMinutes();

      this.setState({ time: Time });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="About">
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 250
          }}
        >
          <h3> Ipod </h3>
          <h3> {this.state.time} </h3>
        </div>

        <div id="Profile">
          <img alt="Profile" src={Profile} />
        </div>

        <h4>Created by </h4>

        <h4>Yash Parwani </h4>
      </div>
    );
  }
}

export default About;
