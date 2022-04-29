import "./index.css";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
class IpodScreen extends React.Component {
  render() {
    const { activeItem } = this.props;
    return (
      <div className="IpodScreen">
        <div id="Left-screen">
          <h1>Ipod.js</h1>
          <ListGroup as="ul">
            <ListGroup.Item
              as="li"
              className={activeItem === "Songs" ? "active" : ""}
            >
              Songs
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className={activeItem === "Games" ? "active" : ""}
            >
              Games
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className={activeItem === "About" ? "active" : ""}
            >
              About
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div id="Right-screen"></div>
      </div>
    );
  }
}

export default IpodScreen;
