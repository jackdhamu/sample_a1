import React from 'react';
import NavHeader from './NavHeader';
import { Layout, Tabs, Card, Row, Col } from 'antd';
import s1 from '../images/s1.jpeg';
import 'antd/dist/antd.css';
import Footer from './ContactFooter';
import Slider from './Slider';
import '../App.scss';

const { Meta } = Card;
const { Content } = Layout
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs type="card" style={{ textAlign: 'center' }} defaultActiveKey="1" onChange={callback} centered>
    <TabPane tab="NOW SHOWING" key="1">
      <br />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="slider-1" src={s1} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <br />
    </TabPane>
    <TabPane tab="COMING SOON" key="2">
      <br />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="slider-2" src={s1} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="slider-3" src={s1} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

      </Row>
      <br />
      </TabPane>
  </Tabs>
);

function Landingpage() {

  return (
    <div>
      <NavHeader />
      <Slider />
      <Content className="site-layout" style={{ padding: '0 100px', marginTop: 30, alignContent: 'center', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <div className="site-layout-background" style={{ padding: 24, }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}>M&nbsp;O&nbsp;V&nbsp;I&nbsp;E&nbsp;S</h2>
          <br />
          <Demo />
          <br />
          <a href="/movies">VIEW MORE ...</a>
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default Landingpage;