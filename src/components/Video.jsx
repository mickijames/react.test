import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import video from '../img/video.mp4';

class Video extends Component {
    render() {
        return (
            <div className='fullscreen-bg'>
                <ReactPlayer loop muted playing
                    className='react-player'
                    url={[
                        {src: video, type: "video/mp4"}
                    ]}
                    width="100vw"
                    height='100vh'
                />
            </div>
        );
    }
}

/**<Video
  style={{
    width: this.state.screenWidth,
    height: this.state.heightScaled
  }}
  source={{ uri: this.props.uriProp }}
  resizeMode='cover'
  paused={this.state.videoPaused}
  onLoad={response => {
    const { width, height } = response.naturalSize;
    const heightScaled = height * (this.state.screenWidth / width);

    this.setState({
      heightScaled,
      videoPaused: false,
    });
  }}
/> */

export default Video;