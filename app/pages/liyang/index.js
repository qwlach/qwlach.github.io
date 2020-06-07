import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import {
  liyang,
  liyang1,
  liyang2,
  liyang3,
  liyang4,
  liyang5,
  liyang6,
  liyang7,
  liyang8,
} from './photo';

const IMGSRC = [
  {
    // link: "app/static/img/liyang.jpg",
    link: liyang,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang1,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang2,
    alt: "溧阳",
    href: "/liyang",

  },
  {
    link: liyang3,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang4,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang5,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang6,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang7,
    alt: "溧阳",
    href: "/liyang",
  },
  {
    link: liyang8,
    alt: "溧阳",
    href: "/liyang",
  },
];

const SONGSRC = "app/static/music/xiaojiuwo.mp3";

class LiYang extends Component {
  render() {
    return (
      <div>
        <h3>第一次因为一个女生去一个陌生的城市 --- 溧阳之行</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              说实话刚在一起的那段时间，那真的是天天都想你，都想看到你
            </h3>
            <h3>
              当然现在也是（哈哈，感觉我的求生欲真的是很强很强了）
            </h3>
            <h3>
              我现在都还记得当时我第一次溧阳我们在酒店的情景
            </h3>
            <h3>
              你当时就直接跳到我身上，一直挂在我身上不肯下去，哈哈。
            </h3>
            <h3>
              那个时候在溧阳感觉我们就是一直在吃东西，吃完了之后就走走
            </h3>
            <h3>
              可能是溧阳太小也没啥好玩的吧，哈哈！！
            </h3>
            <h3>
              但是我挺怀念那种生活的，那过的自由自在，轻松，不用想太多，每天就只要想着你就好了
            </h3>
            <h3>
              某人当时在我回去的那一天还在商场闹脾气哟
            </h3>
            <h3>
              还有，我怎么感觉当时的你吃完就想睡啊，哈哈！
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

export default LiYang;
