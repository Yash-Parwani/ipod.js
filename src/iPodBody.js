import React from 'react'



class IpodBody extends React.Component{
    render(){
        return(
            <div className="IpodBody">
            <div className="Wheel1">
    
              <div className="Menu">
                <h1>Menu</h1>
              </div>
              <div className="Forward">
                <img
                  id="img1"
                  src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
                />
              </div>
              <div className="Backward">
                <img
                  id="img2"
                  src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
                />
              </div>
              <div className="PlayPause">
                <img
                  id="img3"
                  src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
                />
              </div>
              
            </div>
            <div className="Wheel2"></div>
          </div>
        );
    }
}


export default IpodBody