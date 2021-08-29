import React from 'react';
import NavHeader from './NavHeader';
import { Carousel,Tabs,Card,Col, Button } from 'antd';
import baner1 from '../images/b1.jpg';
import baner2 from '../images/f9.jpeg';
import baner3 from '../images/b4.jpg';
import baner4 from '../images/b3.jpg';
import s1 from '../images/s1.jpeg';

import 'antd/dist/antd.css';
import Footer from './Footer1';

const { Meta } = Card;

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#000',
  };
  const { TabPane } = Tabs;
 
  function callback(key) {
    console.log(key);
  }
function Landingpage(){


  return(
    <div>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
      <NavHeader/>
      <Carousel autoplay>
    <div>
      <a href="#"><h3 style={contentStyle}><img width="100%" height="100%" style={{opacity:'0.8'}} src={baner1}/></h3></a>
    </div>
    <div>
      <a href="#"><h3 style={contentStyle}><img width="100%" style={{opacity:'0.8'}} height="100%" src={baner2}/></h3></a>
    </div>
    <div>
      <a href="#"><h3 style={contentStyle}><img width="100%" height="100%" style={{opacity:'0.8'}}  src={baner3}/></h3></a>
    </div>
    <div>
      <a href="#"><h3 style={contentStyle}><img width="100%" height="100%" style={{opacity:'0.8'}} src={baner4}/></h3></a>
    </div>
  </Carousel>
  <br/><br/>
  <h3 style={{textAlign:'center', textDecoration:'underline',textDecorationColor:'coral',textDecorationThickness:'2.5px',}}>M&nbsp;O&nbsp;V&nbsp;I&nbsp;E&nbsp;S</h3>
<br/>
<div className="container">
    <div className="row justify-content-center">
        <div className="col">
        <Tabs style={{textAlign:'center'}} onChange={callback} type="card">
    <TabPane tab="NOW SHOWING" key="1">

    <Card
    hoverable
    style={{ width: 200, }}
    cover={<img alt="example" src={s1} />}
  >
    <Meta title="Tokyo drift" description="www.instagram.com" /><br/>
    <Button type="primary">Book</Button>
  </Card>  
    </TabPane>
    <TabPane tab="COMING SOON" key="2">
  <div className="row">
     
  <div className="col">
      <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src={s1} />}
  >
    <Meta title="Tokyo drift" description="www.instagram.com" /><br/>
    <Button type="primary">Book</Button>


  </Card> 
      </div> <div className="col">
      <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src={s1} />}
  >
    <Meta title="Tokyo drift" description="www.instagram.com" /><br/>
    <Button type="primary">Book</Button>

  </Card> 
      </div> <div className="col">
      <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src={s1} />}
  >
    <Meta title="Tokyo drift" description="www.instagram.com" /><br/>
    <Button type="primary">Book</Button>

  </Card> 
      </div>
  </div>
  
  
     </TabPane>
    
  </Tabs>
  <a href="#">View more ...</a>

        </div>
     
    </div>

</div>
<br/><br/>

 <Footer/>
     </div>
    
  );
}

export default Landingpage;