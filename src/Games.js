import React from "react";
import Control from "./assets/images/Control.jpg"

class Games extends React.Component {
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
      <div className="Games">
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 250
          }}
        >
          <h3> Ipod </h3>
          <h4> {this.state.time} </h4>
        </div>
        <img src={Control} alt="games" style ={{width: 200}}/>
      </div>
    );
  }
}

export default Games;
