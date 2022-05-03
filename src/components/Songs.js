import React from "react";


//importing the song to be played when song component is opened up directly
import Neele from "../assets/songs/Neele.mp3";


class Songs extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Neele Neele Ambar par",
      link:Neele,
      artist: "Kishore Kumar",
      time: ""
     
    };
    this.audioRef = React.createRef()
  }
  // logic to play music
  setMusic = ()=>{
    const {isPlaying} = this.props;
    if(isPlaying){
      this.audioRef.current.play();
    }
    else{
      this.audioRef.current.pause();
    }
}
//  logic for showcasing current time which will be updated at regular intervals of 1 sec
  componentDidMount() {
    this.interval = setInterval(() => {
      let today = new Date();
      let Time = today.getHours() + ":" + today.getMinutes();

      this.setState({ time: Time });
    }, 1000);
    this.setMusic()
  }
  
  // to check updated props and play/pause music accordingly
  componentDidUpdate = () =>{
    this.setMusic()
  }
  // clearing setintervals before the component is unmounted to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
  render() {
    // destructuring state 
    const {title,link,artist} = this.state;
    return (
      <div className="Songs">
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
        
        <img id="song-img"
          alt={title}
          src="data:image/jpeg;base64,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"
        />
        
        <p>{artist}</p>
        <p>{title}</p>
        <audio ref ={this.audioRef}style={{height: 15}} src={link} controls />
  
        
      </div>
    );
  }
}

export default Songs;
