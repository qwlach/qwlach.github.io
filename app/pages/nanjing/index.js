import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";

const IMGSRC = [
  {
    link: "../../app/static/img/nanjing.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "../../app/static/img/nanjing1.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "../../app/static/img/nanjing2.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "../../app/static/img/nanjing4.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "../../app/static/img/nanjing5.jpg",
    alt: "南京",
    href: "/nanjing"
  },
  {
    link: "../../app/static/img/nanjing6.jpg",
    alt: "南京",
    href: "/nanjing"
  },
];

const SONGSRC = "../../app/static/music/travel.mp3";

class NanJing extends Component {
  render() {
    return (
      <div>
        <h3>愿陪你走过天涯海角。 -- 南京之行</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              2018年的元旦一行，哈哈我们在一起也算是一起跨过年的人了
            </h3>
            <h3>
              我记得我们到南京的第一天就吵架了，原因是什么我也记不太清了。
            </h3>
            <h3>
              我们大晚上的下来吃烧烤，吃泡面
            </h3>
            <h3>
              然后逛玄武湖，明长城，总统府，带着一丝遗憾没有逛完明长城就去了总统府
            </h3>
            <h3>
              结果去了之后无聊到爆，哈哈，味道还难闻的要死，赶紧跑出来了
            </h3>
            <h3>
              浪费了我们两张门票
            </h3>
            <h3>
              但这也阻挡不了我想带你去玩的❤️。
            </h3>
            <h3>
              接下来我们肯定还有很多很多的地方要去，哈哈。
            </h3>
            <h3 style={{ textAlign: "right" }}>
              一直被你嫌弃的小胖子
            </h3>
          </Col>
          <Col span={12}>
            <CarouselComponent imgSrc={IMGSRC} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NanJing;
