import React, { Component } from "react";
import AntdLayout from "../../components/antd-layout";

class App extends Component {
  render() {
    return (
      <AntdLayout>
        {this.props.children}
      </AntdLayout>
    );
  }
}

export default App;
