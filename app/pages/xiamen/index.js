import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";
import {
  xiamen,
  xiamen1,
  xiamen2,
  xiamen3,
  xiamen4,
  xiamen5,
  xiamen6,
  xiamen7,
  xiamen8,
  xiamen9,
  xiamen10,
  xiamen11,
  xiamen12,
  xiamen13,
  xiamen14,
  xiamen15,
  xiamen16,
} from './photo';

const IMGSRC = [
  {
    // link: "app/static/img/xiamen.jpg",
    link: xiamen,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen1,
    alt: "厦门",
    href: "/xiamen"

  },
  {
    link: xiamen2,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen3,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen4,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen5,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen6,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen7,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen8,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen9,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen10,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen11,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen12,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen13,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen14,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen15,
    alt: "厦门",
    href: "/xiamen"
  },
  {
    link: xiamen16,
    alt: "厦门",
    href: "/xiamen"
  },
];

const SONGSRC = "app/static/music/zuolianjia.mp3";

class XiaMen extends Component {
  render() {
    return (
      <div>
        <h3>第一次和自己心爱的人看海。 -- 厦门之行</h3>
        <h3>小可爱还记得这首歌么， 在厦门的海滩上为我唱的，可高兴坏我了</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              从认识你的时候就想带你去海边玩
            </h3>
            <h3>
              2018年国庆终于实现了这个愿望
            </h3>
            <h3>
              第一次跟你去海边看你激动、开心的样子，我心里也真的很开心很开心
            </h3>
            <h3>
              我希望你一直能这样开开心心的生活着
            </h3>
            <h3>
              我感觉厦门的那次旅行真的很舒服，没有刻意去追求景点，一切都是那么的放松，喜欢抱着你晚上坐在海边听海风的声音，看厦门的夜景
            </h3>
            <h3>
              反正我们的旅行总是离不开吃这个话题，跟你在一起之后我吃了太多以前没吃过的美食
            </h3>
            <h3>
              没想到居然在厦门还吃到了那么好吃的辣椒炒肉，简直是意外之喜
            </h3>
            <h3>
              曾厝垵真的是一个吃货的天堂啊，吃的简直不要太多了
            </h3>
            <h3>
              好怀念那里的椰汁跟姜母鸭呀
            </h3>
            <h3>
              有机会一定要跟你再去那里吃吃
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

export default XiaMen;
