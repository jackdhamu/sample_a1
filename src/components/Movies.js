import Slider from './Slider';
import NavHeader from 'components/NavHeader';
import { Tabs, Card, Row, Col, Checkbox } from 'antd';
import React from 'react';
import Footerr from './ContactFooter';
import s1 from '../images/s1.jpeg';
import { Layout } from 'antd';

function callback(key) {
  console.log(key);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const { TabPane } = Tabs;
const { Meta } = Card;
const { Sider, Content } = Layout;

const Demo = () => (
  <Tabs style={{ textAlign: 'center' }} defaultActiveKey="1" onChange={callback} centered>
    <TabPane tab="NOW SHOWING" key="1">
      <br />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="Movie-1" src={s1} />}
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
            cover={<img alt="Movie-2" src={s1} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Movie-3" src={s1} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
      <br /> 
   </TabPane>

  </Tabs>
);
class Movies extends React.Component {

  render() {
    return (
      <div>
        <NavHeader />
        <Slider />
        <br />
        <Content>
          <Row>
            <Col offset={2} span={7} >
              <br /><br />   <br />
              <Sider style={{ backgroundColor: 'white', padding: '20px' }}>
                <Row>
                  <Col span={12}>
                    <h2>Filter By</h2>
                  </Col>
                  <Col offset={4} span={8}>
                    <a>Clear</a>
                  </Col>
                </Row>
                <hr /><br />
                <div style={{ color: 'grey' }}>
                  <h4 ><b>LANGUAGE</b></h4>
                  <Checkbox onChange={onChange}>HINDI</Checkbox>< br />
                  <Checkbox onChange={onChange}>ENGLISH</Checkbox><br />
                  <Checkbox onChange={onChange}>TAMIL</Checkbox><br /><br />
                  <hr />
                  <br />
                  <h4><b>EXPERIENCE</b></h4>
                  <Checkbox onChange={onChange}>2D</Checkbox><br /><br />
                  <hr />
                  <br />
                  <h4><b>GENRE</b></h4>
                  <Checkbox onChange={onChange}>ACTION</Checkbox>< br />
                  <Checkbox onChange={onChange}>CRIME</Checkbox>< br />
                  <Checkbox onChange={onChange}>ADVENTURE</Checkbox>< br />
                  <Checkbox onChange={onChange}>COMEDY</Checkbox>< br />
                  <Checkbox onChange={onChange}>DRAMA</Checkbox>< br />
                  <Checkbox onChange={onChange}>SCI-FI</Checkbox>< br />
                  <Checkbox onChange={onChange}>BIOGRAPHY</Checkbox>< br />
                </div>
              </Sider>
            </Col>
            <Col span={10} >
              <Content>
                <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}>MOVIES</h2>
                <Demo />
              </Content>
            </Col>
          </Row>
        </Content>
        <br /><br />
        <Footerr />
      </div>
    );
  }
}
export default Movies;