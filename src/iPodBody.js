import React from "react";
import ZingTouch from "zingtouch";
class IpodBody extends React.Component {
  demo = () => {
    var containerElement = document.getElementById("Wheel1");
    var activeRegion = new ZingTouch.Region(containerElement);

    activeRegion.bind(containerElement, "rotate", function (event) {
      //Perform Operations
      console.log("Wheel");
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
              id="img1"
              src="https://cdn-icons.flaticon.com/png/512/3318/premium/3318559.png?token=exp=1650793637~hmac=ef16eeed3ff7b7c7152300266a2ad940"
            />
          </div>
          <div className="Backward">
            <img
              id="img2"
              src="https://cdn-icons.flaticon.com/png/512/3318/premium/3318711.png?token=exp=1650793556~hmac=e8cc372c24de545cd6181533fdc1980b"
            />
          </div>
          <div className="PlayPause">
          <img
              id="img3"
              src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1650793048~hmac=2805feaa50db921fbb6c68a8aea514cd"
            />
          </div>
        </div>
         <div className="Wheel2"></div> 
      </div>
    );
  }
}
export default IpodBody;
