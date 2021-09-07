import React from 'react';
import { Carousel, } from 'antd';
import baner1 from '../images/b1.jpg';
import baner4 from '../images/b3.jpg';
import 'antd/dist/antd.css';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '360px',
  textAlign: 'center',
  background: '#000',
};
class Slider extends React.Component {

  render() {

    return (
      <div>
        <Carousel autoplay>
          <div>
            <a href="/landingpage"><h3 style={contentStyle}><img width="100%" height="100%" style={{ opacity: '0.8' }} src={baner1} alt="baner-1" /></h3></a>
          </div>
          <div>
            <a href="#"><h3 style={contentStyle}><img width="100%" height="100%" style={{ opacity: '0.8' }} src={baner4} alt="baner-2" /></h3></a>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;