import React from 'react';
import { CustomerServiceOutlined, SolutionOutlined, AliwangwangOutlined, DesktopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import '../App.css';


function Footer() {

   return (
      <div>
         <div style={{ backgroundColor: '#001529', textAlign: 'center' }} >
            <br /><br />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
               <Col className="iconn" offset={2} span={4}>
               <Row>
               <CustomerServiceOutlined style={{ marginLeft:'25px'}}/>
                 </Row>
                 <Row>
                 <a href="/contact" className="footericon1">CUSTOMER CARE</a>
                 </Row>
               </Col>
                  <Col className="iconn" span={4} >
               <Row>
                  <SolutionOutlined/>
                 </Row>
                 <Row>
                 <a href="/faq" className="footericon1" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQ</a>
                 </Row>
                 </Col>
               <Col className="iconn" span={4}>
               <Row>
                  <InfoCircleOutlined/>
                 </Row>
                 <Row>
                 <a href="/contact" className="footericon1">ABOUT US</a> 
                 </Row>
                 </Col>
               <Col className="iconn" span={4}>
               <Row>
                  <AliwangwangOutlined/>
                 </Row>
                 <Row>
                 <a href="/feedback" className="footericon1" >FEEDBACK</a>  
                  </Row>
                  </Col>
               <Col className="iconn"span={4} >
                  <Row>
                  <DesktopOutlined/>
                 </Row>
                 <Row>
                 <a href="/landingpage"className="footericon1">BOX OFFICE</a>   
                  </Row>
                  </Col>
            </Row>
            <br /><br /><br/>
            <p style={{ textAlign: 'center' , color:'white'}}>All rights received ©2021 Created by TicketEzy Dev Team</p>
            
         </div>
      </div>
   );
}

export default Footer;