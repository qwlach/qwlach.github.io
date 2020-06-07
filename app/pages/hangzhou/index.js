import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import { 
  hangzhou,
  hangzhou1,
  hangzhou2,
  hangzhou3,
  hangzhou4,
  hangzhou5,
  hangzhou6,
  hangzhou7,
  hangzhou8,
} from './photo'

const IMGSRC = [
  {
    // link: "app/static/img/hangzhou.jpg",
    link: hangzhou,
    alt: "杭州",
    href: "/hangzhou",
  },
  {
    link: hangzhou1,
    alt: "杭州",
    href: "/hangzhou"

  },
  {
    link: hangzhou2,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou3,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou4,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou5,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou6,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou7,
    alt: "杭州",
    href: "/hangzhou"
  },
  {
    link: hangzhou8,
    alt: "杭州",
    href: "/hangzhou"
  },
];

const SONGSRC = "app/static/music/hangzhou.mp3";

class HangZhou extends Component {
  render() {
    return (
      <div>
        <h3>相知，相识，相爱的地方。 -- 杭州</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              2017年8月26日，
              你，来到了杭州，哈哈当时我怎么有种当坏人的感觉
            </h3>
            <h3>
              从你来杭州开始，我就没想过让你就这么容易的回去了
            </h3>
            <h3>
              最后还真是带着一个标签回去了， --- 漆伟龙的女朋友， 哈哈，当时别提有多开心了
            </h3>
            <h3>
              讲真的，杭州是我们待过最久的一座城市，也正因为这座城市，让我们变得彼此都离不开彼此了
            </h3>
            <h3>
              所以我真的很感谢这座城市
            </h3>
            <h3>
              在这座城市里我们一起走过了春夏秋冬四季
            </h3>
            <h3>
              虽然在这座城市里我们我们闹过别扭，经历过几次分手，但是幸运的是我们都坚持过来了
            </h3>
            <h3>
              因为我们彼此都爱着对方
            </h3>
            <h3>
              因为你，我学会了炒菜做饭
            </h3>
            <h3>
              因为你，让我懂得了如何去照顾别人
            </h3>
            <h3>
              也是因为你，让我更加有动力去努力奋斗
            </h3>
            <h3>
              只是为了让你跟我在一起后能过的好点，少受点苦
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

export default HangZhou;
