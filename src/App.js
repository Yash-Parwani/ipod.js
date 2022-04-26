import "./index.css";



import ZingTouch from "zingtouch";

import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Songs"
    };
  }

  rotateFunction = () => {
    var target = document.getElementById("Wheel1");
    var region = new ZingTouch.Region(target);
    let clockwisechange = 0;
    let anticlockwisechange = 0;
    region.bind(target, "rotate", (e) => {
      let distanceFromLast = e.detail.distanceFromLast;

      if (distanceFromLast >= 0) {
        clockwisechange++;
        console.log(
          "Value incremented of clockwisechange is ",
          clockwisechange
        );
        if (clockwisechange === 30) {
          clockwisechange = 0;
          if (this.state.activeItem === "Songs") {
            this.setState({
              activeItem: "Games"
            });
          } else if (this.state.activeItem === "Games") {
            this.setState({
              activeItem: "About"
            });
          } else {
            this.setState({
              activeItem: "Songs"
            });
          }
        }
      } else {
        console.log("Anticlockwise");
        anticlockwisechange++;
        if (anticlockwisechange === 30) {
          anticlockwisechange = 0;
          if (this.state.activeItem === "Songs") {
            this.setState({
              activeItem: "About"
            });
          } else if (this.state.activeItem === "About") {
            this.setState({
              activeItem: "Games"
            });
          } else {
            this.setState({
              activeItem: "Songs"
            });
          }
        }
      }
    });
  };

  Wheel2handler = () => {
    console.log("Wheel2 is clicked");
    const { activeItem } = this.state;

    if (activeItem === "Songs") {
      console.log("Render Song component");
    } else if (activeItem === "Games") {
      console.log("render Games Component");
    } else {
      console.log("Render about component");
    }
  };
  componentDidUpdate = () => {
    this.rotateFunction();
  };

  render() {
    return (
      <div className="App">
        <div className="IpodScreen">
          <div id="Left-screen">
            <h1>Ipod.js</h1>
            <ListGroup as="ul">
              <ListGroup.Item
                as="li"
                className={this.state.activeItem === "Songs" ? "active" : ""}
              >
                Songs
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={this.state.activeItem === "Games" ? "active" : ""}
              >
                Games
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={this.state.activeItem === "About" ? "active" : ""}
              >
                About
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div id="Right-screen"></div>
        </div>
        <div className="IpodBody">
          <div id="Wheel1" onMouseOver={this.rotateFunction} draggable="false">
            <div className="Menu">
              <h1>Menu</h1>
            </div>
            <div className="Forward">
              <img
                alt="forward"
                id="img1"
                src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
              />
            </div>
            <div className="Backward">
              <img
                alt="backward"
                id="img2"
                src="https://cdn-icons-png.flaticon.com/512/4029/4029036.png"
              />
            </div>
            <div className="PlayPause">
              <img
                alt="playpause"
                id="img3"
                src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1650791290~hmac=a6d5daf4ce40eac04569cb5a69d46a3b"
              />
            </div>
          </div>
          <div className="Wheel2" onClick={this.Wheel2handler}></div>
        </div>
      </div>
    );
  }
}

export default App;
