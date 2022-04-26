import React from "react";
import ZingTouch from "zingtouch";
class IpodBody extends React.Component {
  demo = () => {
    var containerElement = document.getElementById("Wheel1");
    var activeRegion = new ZingTouch.Region(containerElement);

    var change = 0;
    activeRegion.bind(containerElement, "rotate", function (event) {
      //Perform Operations
      var newangle = event.detail.distanceFromLast;
      console.log(newangle);
      if (newangle < 0) {
        console.log("IN new angle < 0 i.e anticlockwise");
      } else {
        console.log("in new angle > 0 i.e clockwise");
      }
    });
  };
  render() {
    return (
      <div className="IpodBody">
        <div id="Wheel1" onMouseOver={this.demo}>
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
        <div className="Wheel2"></div>
      </div>
    );
  }
}
export default IpodBody;
