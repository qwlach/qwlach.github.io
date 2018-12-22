import React, { Component } from "react";
import { Row, Col } from "antd";
import AudioPaly from "../../components/audio";
import CarouselComponent from "../../components/carousel";

const IMGSRC = [
  {
    link: "app/static/img/bengbu.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu1.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu2.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu3.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu4.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu5.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu6.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
  {
    link: "app/static/img/bengbu7.jpg",
    alt: "蚌埠",
    href: "/bengbu"
  },
];

const SONGSRC = "app/static/music/wanghouyusheng.mp3";

class BengBu extends Component {
  render() {
    return (
      <div>
        <h3> 你工作的新地点 -- 蚌埠之行</h3>
        <AudioPaly src={SONGSRC} />
        <Row>
          <Col span={12}>
            <h3>
              在你没去这个地方工作的时候，我甚至连蚌埠这个地方在哪里都不知道
            </h3>
            <h3>
              真是认识一个人，认识一座城，因为你，我认识很多座城
            </h3>
            <h3>
              蚌埠总体感觉就跟溧阳差不多，
            </h3>
            <h3>
              两个吃货在一起的日常肯定少不了吃啊
            </h3>
            <h3>
              安徽特色，酸汤鱼拌饭，烧饼夹里脊，牛肉汤，焖锅。。。
            </h3>
            <h3>
              哈哈，我感觉我之前那么多年真是白过了，
            </h3>
            <h3>
              然后挺感谢感谢我家小可爱在蚌埠帮我过得生日
            </h3>
            <h3>
              说实话挺想跟你在一起帮你过个生日的，但是你这个生日的点有点尴尬了，哈哈
            </h3>
            <h3>
              最后，我感觉我这人挺坏的，你一直想跟我一起去做个陶瓷我到现在都没陪你去
            </h3>
            <h3>
              哈哈，不过以后要给你种好多好多石榴树，让你一直可以吃石榴。
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

export default BengBu;
