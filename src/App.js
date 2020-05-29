import React, { Component } from 'react';

import './App.css';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';





class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>	
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>  
    )
  }
}

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'https://www.youtube.com/watch?v=Kl6644rU0Zk',
      type: 'video/mp4'
    }]
  }
  return (
    <div className="App">
      <VideoPlayer  { ...videoJsOptions } />
    </div>
  );
}

export default App;
