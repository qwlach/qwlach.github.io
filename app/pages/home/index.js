import React, { Component } from "react";
import { Button, Row, Col } from 'antd';
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import { timestampToTime } from "../../utils";
import "./index.css";

const IMGSRC = [
  {
    link: "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=db097dbddcc8a786a12a4c0e5709c9c7/5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg",
    alt: "首页",
    href: "/",
  },
  {
    link: "app/static/hangzhou.jpg",
    alt: "杭州",
    href: "/hangzhou",
  },
  {
    link: "app/static/changsha.jpg",
    alt: "长沙",
    href: "/changsha"

  },
  {
    link: "app/static/wuzhen.jpg",
    alt: "乌镇",
    href: "/wuzhen"
  },
  {
    link: "app/static/nanjing.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "app/static/xiamen.jpg",
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: "app/static/bengbu.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
];
const TIME = (new Date("2017/8/26 11:00:00")).getTime()

const SONGSRC = "app/static/music/marry.mp3";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTranslation: true,
      time: timestampToTime(new Date().getTime() - TIME),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.handleToDealWithTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  handleToDealWithTime = () => {
    const time = timestampToTime(new Date().getTime() - TIME);
    this.setState({ time });
  }

  handleTranslation = () => {
    this.setState(({ isTranslation }) => ({
      isTranslation: !isTranslation,
    }));
  };

  render() {
    const { isTranslation } = this.state;
    return (
      <div>
        <h2>
          <Row>
            <Col span={24}>
              {
                isTranslation && (
                  <Row>
                    <Col span={16}>
                      <span>Vera，</span>
                      <span>The best thing in the world is to have you.</span>
                    </Col>
                    <Col span={8}>
                      <Button type="primary" onClick={this.handleTranslation}>
                        看不懂的话可以点击我哟
                    </Button>
                    </Col>
                  </Row>
                )

              }
              {
                !isTranslation && (
                  <Row>
                    <Col span={16}>
                      <span>陈欢，</span>
                      <span>世界上最每好的事情就是拥有你。</span>
                    </Col>
                    <Col span={8}>
                      <Button type="primary" onClick={this.handleTranslation}>
                        哈哈，让你多学学英语吧
                      </Button>
                    </Col>
                  </Row>
                )
              }

            </Col>
          </Row>
        </h2>
        <AudioPaly src={SONGSRC} />
        <Row
          style={{ textAlign: "center", fontSize: "40px", paddingTop: "100px" }}
        >
          {/* <Col span={12}>
            <h3>
              记录生活中的点滴
              </h3>
          </Col>
          <Col span={12}>
            <CarouselComponent imgSrc={IMGSRC} />
          </Col> */}
          <h2>在一起</h2>
          <h2>{this.state.time}</h2>
        </Row>

      </div>
    );
  }
}

export default HomePage;
