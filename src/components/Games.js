import React from "react";
import Control from "../assets/images/Control.jpg"

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }
  //  logic for showcasing current time which will be updated at regular intervals of 1 sec
  componentDidMount() {
    this.interval = setInterval(() => {
      let today = new Date();
      let Time = today.getHours() + ":" + today.getMinutes();

      this.setState({ time: Time });
    }, 1000);
  }
  // clearing setintervals before the component is unmounted to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="Games">
        {/* header has the logic for styling and showing timer and Ipod as headings */}
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
