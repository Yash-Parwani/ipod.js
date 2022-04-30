import "./index.css";


import IpodScreen from "./IpodScreen";
import Songs from "./Songs";
import About from "./About";
import Games from "./Games";
import Neele from "./assets/songs/Neele.mp3"

import ZingTouch from "zingtouch";


import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Songs",
      address: "/songs",
      
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

        if (clockwisechange === 30) {
          clockwisechange = 0;
          if (this.state.activeItem === "Songs") {
            this.setState({
              activeItem: "Games",
              address: "/games"
            });
          } else if (this.state.activeItem === "Games") {
            this.setState({
              activeItem: "About",
              address: "/about"
            });
          } else {
            this.setState({
              activeItem: "Songs",
              address: "/songs"
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
              activeItem: "About",
              address: "/about"
            });
          } else if (this.state.activeItem === "About") {
            this.setState({
              activeItem: "Games",
              address: "/games"
            });
          } else {
            this.setState({
              activeItem: "Songs",
              address: "/songs"
            });
          }
        }
      }
    });
  };

  menuToHome = () => {
    const { address } = this.state;

    if (address === "/songs" || address === "/games" || address === "/about") {
      // redirect back to home page
      return "/";
    }
  };

  unlock = () => {
    if (this.state.isLocked) {
      this.setState({
        isLocked: false
      });
      this.setState({
        address: "/home"
      });
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="IpodScreen">
            <Routes>
              <Route
                path="/"
                exact
                element={<IpodScreen activeItem={this.state.activeItem} />}
              />
              <Route path="/about" exact element={<About />} />
              <Route path="/games" exact element={<Games />} />
              <Route path="/songs" exact element={<Songs title={this.state.title} link={this.state.link} artist = {this.state.artist} />} />
            </Routes>
          </div>
          <div className="IpodBody">
            <div
              id="Wheel1"
              onMouseOver={this.rotateFunction}
              draggable="false"
            >
              <Link to={this.menuToHome()}>
                <div className="Menu">
                  <h1>Menu</h1>
                </div>
              </Link>
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
              <div className="PlayPause" onClick={this.playPauseToggle}>
                <img
                  alt="playpause"
                  id="img3"
                  src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1650791290~hmac=a6d5daf4ce40eac04569cb5a69d46a3b"
                />
              </div>
            </div>
            <Link to={this.state.address}>
              <div id="Wheel2"></div>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
