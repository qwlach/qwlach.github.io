import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router";
// import { timestampToTime } from "../../utils";
import './index.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MenuType = [
  {
    key: "1",
    value: "首页",
    link: "/",
    hash: "#/",
  },
  {
    key: "2",
    value: "杭州",
    link: "/hangzhou",
    hash: "#/hangzhou",
  },
  {
    key: "3",
    value: "长沙",
    link: "/changsha",
    hash: "#/changsha",
  },
  {
    key: "4",
    value: "乌镇",
    link: "/wuzhen",
    hash: "#/wuzhen",
  },
  {
    key: "5",
    value: "南京",
    link: "/nanjing",
    hash: "#/nanjing",
  },
  {
    key: "6",
    value: "厦门",
    link: "/xiamen",
    hash: "#/xiamen",
  },
  {
    key: "7",
    value: "溧阳",
    link: "/liyang",
    hash: "#/liyang",
  },
  {
    key: "8",
    value: "蚌埠",
    link: "/bengbu",
    hash: "#/bengbu",
  },
];

// const TIME = (new Date("2017/8/26 11:00:00")).getTime()


class AntdLayout extends Component {
  constructor(props) {
    super(props);
    this.timer = '';
    this.state = {
      // time: timestampToTime(new Date().getTime() - TIME),
      current: this.handleFindMenu("value"),
      key: this.handleFindMenu("key"),
    }
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => this.handleToDealWithTime(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // };

  componentWillReceiveProps(nextProps) {
    const pathname = nextProps.children.props.location.pathname;
    MenuType.map(item => {
      if (item.link === pathname) {
        console.log(item.key, 123456678997544567876)
        this.setState({
          key: [item.key],
          current: item.value,
        })
      }
    })
  }

  // handleToDealWithTime = () => {
  //   const time = timestampToTime(new Date().getTime() - TIME);
  //   this.setState({ time });
  // }

  handleFindMenu = (type) => {
    let obj = {};
    MenuType.map(item => {
      let flag = false;
      if (item.hash === window.location.hash) {
        flag = true;
      } else if (item.children && item.children.length) {
        this.handleLoopData(item.children);
      }
      if (flag) {
        obj = item;
      }
    });
    return [obj[type]];
  };

  handleLoopData = (loopData) => {
    loopData.map(item => {
      if (item.hash === window.location.hash) {
        return true;
      } else if (item.children && item.children.length) {
        this.handleLoopData(item.children);
      }
    })
  }

  handleClick = (obj) => {
    const value = MenuType.find(item => item.key === obj.key)
    this.setState({
      key: obj.keyPath,
      current: value.value,
    });
  };

  render() {
    const { key, current } = this.state;
    console.log(key)
    console.log(this.props.children);
    return (
      <Layout
        className="layout"
      >
        <Header className="header">
          <div className="logo">
            <span>漆伟龙&amp;Vera&nbsp;{this.state.time}</span>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={key}
            onClick={this.handleClick}
            style={{ lineHeight: '64px' }}
          >
            {
              MenuType.map(MenuItem => (
                <Menu.Item key={MenuItem.key}>
                  <Link to={MenuItem.link}>
                    {
                      MenuItem.value
                    }
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Header>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{current}</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{
            padding: 24, margin: 0, height: "100%",
          }}
          >
            {this.props.children || ""}
          </Content>
        </Layout>
        {/* </Layout> */}
      </Layout>
    );
  }
}

export default AntdLayout;
