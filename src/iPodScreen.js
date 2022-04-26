import React from "react";

class IpodScreen extends React.Component {
  render() {
    return (
      <div className="IpodScreen">
        <div id="Left-screen">
          <h1>Ipod.js</h1>
          <ul>
            <li>Songs</li>
            <li>Games</li>
            <li>About</li>
          </ul>
        </div>
        <div id="Right-screen"></div>
      </div>
    );
  }
}

export default IpodScreen;
