import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import {
  changsha,
  changsha1,
  changsha2,
  changsha3,
  changsha4,
  changsha5,
  changsha6,
  changsha7,
  changsha8,
} from './photo';

const IMGSRC = [
  {
    // link: "app/static/img/changsha.jpg",
    link: changsha,
    alt: "长沙",
    href: "/changsha",
  },
  {
    link: changsha1,
    alt: "长沙",
    href: "/changsha"

  },
  {
    link: changsha2,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha3,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha4,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha5,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha6,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha7,
    alt: "长沙",
    href: "/changsha"
  },
  {
    link: changsha8,
    alt: "长沙",
    href: "/changsha"
  },
];

const SONGSRC = "app/static/music/liangsanbo.mp3";

class ChangSha extends Component {
  render() {
    return (
      <div>
        <h3>哎呀，回到你呆了很久的城市了。 -- 长沙之行</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              想见你的时候真的是什么都拦不住
            </h3>
            <h3>
              做了一夜的火车，虽然累，但是也浇灭不了内心想见你的渴望
            </h3>
            <h3>
              （某人也坐过一夜的火车来杭州找我，想给我一个惊喜，结果被我猜到了，这件事一直让某人不爽，哈哈）
            </h3>
            <h3>
              来到了你的城市，来到了你合租的那个房子，突然感觉到了有一种家的味道
            </h3>
            <h3>
              在这里度过了一个美妙的早上（哈哈，我就不直接说出来了）
            </h3>
            <h3>
              带我去橘子洲头看过🎆，吃过花甲粉，去了长沙那条街（叫啥忘记了），
            </h3>
            <h3>
              去过植物园，吃过南昌炒粉跟瓦罐汤（虽然不正宗）
            </h3>
            <h3>
              某人还在姨妈来的期间，那么冷的天气带我去橘子洲头，跟毛爷爷合影，哈哈，这里心疼我家小可爱两秒
            </h3>
            <h3>
              长沙是个好地方，希望我们以后能定居在那里，好想去爬岳麓山
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

export default ChangSha;
