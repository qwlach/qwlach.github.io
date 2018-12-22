import React, { Component } from "react";
import "./index.css";

class NoMsgPage extends Component {
  render() {
    return (
      <div className="message">
        <h3>找不到该页面</h3>
        <h3>请确认您输入的URL是否正确</h3>
      </div>
    )
  }
};

export default NoMsgPage;
