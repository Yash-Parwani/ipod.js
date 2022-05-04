import React from "react";

class Settings extends React.Component {
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
      <div className="About" style={{display : "flex", flexDirection : "column",justifyContent :"space-around",alignItems:"center"}}>
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
          <h3> {this.state.time} </h3>
        </div>
         
        <div id="Settings" >
           <img alt="Settings"src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" />
        </div>

        
      </div>
    );
  }
}

export default Settings;
