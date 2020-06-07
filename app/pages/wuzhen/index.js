import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import {
  wuzhen,
  wuzhen1,
  wuzhen2,
  wuzhen3,
} from './photo';

const IMGSRC = [
  {
    // link: "app/static/img/wuzhen.jpg",
    link: wuzhen,
    alt: "乌镇",
    href: "/wuzhen"
  },
  {
    link: wuzhen1,
    alt: "乌镇",
    href: "/wuzhen"

  },
  {
    link: wuzhen2,
    alt: "乌镇",
    href: "/wuzhen"
  },
  {
    link: wuzhen3,
    alt: "乌镇",
    href: "/wuzhen"
  },
];

const SONGSRC = "app/static/music/waityou.mp3";

class WuZhen extends Component {
  render() {
    return (
      <div>
        <h3>你好哇，陈欢，见到你真高兴。 -- 写在我们初识的地方</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              认识： 2017年8月20日
              fall in love: 2017年8月26日
            </h3>
            <h3>
              不知不觉中，我们在一起已经482天了。
            </h3>
            <h3>
              就像开头跟这首歌说的那样终于等到你，这一生能遇见你，真好！
            </h3>
            <h3>
              讲真的，就算现在这么久过去了，但是在乌镇第一眼看见的的那种感觉却始终在我脑海里。
            </h3>
            <h3>
              这种感觉真的是很奇妙，不知道怎么表达，但是一切都令人感觉到时那么的舒服，让人一辈子都不愿意忘怀。
            </h3>
            <h3>
              当初决定去要你微信的时候真的自己是下了很大很大的决心的，哈哈，终于在我的死皮赖脸下给要到了，要到微信之后当时就在心里对自己说，这个女孩，将会是以后陪伴我一辈子的人。
            </h3>
            <h3>
              乌镇之行，不，应该是人生旅途中
            </h3>
            <h3>
              你是我最大的收获，是上天给予我最好的回馈。
            </h3>
            <h3>
              最后借用王小波的一句话
            </h3>
            <h3>
              告诉你，一想到你，我这张丑脸上就泛起微笑 。
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

export default WuZhen;
