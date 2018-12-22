import React, { Component } from "react";
import { Carousel } from 'antd';
import { Link } from "react-router";
import "./index.css";

class CarouselComponent extends Component {
  static defaultProps = {
    imgSrc: [],
    width: "100%",
  }

  render() {
    const { imgSrc, width } = this.props;
    return (
      <div style={{ margin: "0 auto", padding: "0 0 16px 0", width: width }}>
        <Carousel autoplay>
          {
            imgSrc.map(item => {
              return (
                <div key={item.link}>
                  {/* <Link to={item.href || "/"}> */}
                  <img alt={item.alt} src={item.link} style={{ width: "100%", height: "500px" }} />
                  {/* </Link> */}
                </div>
              )
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
