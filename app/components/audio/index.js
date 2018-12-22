import React, { Component } from "react";
import { Icon } from 'antd';

const DEFAULT = "app/static/marryWithMe.mp3";

class AudioPaly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: true,
    }
  }

  componentDidMount() {
    if (this.state.isPlay) {
      this.handlePlay()
    }
  }
  handlePlay = () => {
    this.refs.audio.currentTime = 0;
    this.refs.audio.play();
    this.setState({
      isPlay: true,
    })
  };

  handleStop = () => {
    this.refs.audio.pause();
    this.refs.audio.currentTime = 0;
    this.setState({
      isPlay: false,
    });
  };

  render() {
    const { isPlay } = this.state;
    const { src } = this.props;
    return (
      <div style={{ textAlign: "right", padding: "0 0 16px 0" }}>
        {
          isPlay ?
            <Icon type="stop" theme="twoTone" onClick={this.handleStop} style={{ fontSize: "30px" }} />
            :
            <Icon type="sound" theme="twoTone" onClick={this.handlePlay} style={{ fontSize: "30px" }} />
        }
        <audio
          loop={true}
          src={src || DEFAULT}
          ref="audio"
        >
          123
          </audio>
      </div>
    );
  }
}

export default AudioPaly;
