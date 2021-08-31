import React from 'react';
import { CustomerServiceOutlined , SolutionOutlined , AliwangwangOutlined, DesktopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
function Footer(){
    

return(
    <div>
    <div style={{backgroundColor:'#001529' ,textAlign:'center'}} >
    <br/><br/> 
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    
    <Col className="gutter-row"offset={1} span={5}>
      <CustomerServiceOutlined className="footericon1" style={{fontSize:'100px',color:'white'}} /><br/><br/>
   <a href="/contact" className="footericon1">CUSTOMER CARE</a>      </Col>
      <Col className="gutter-row" span={4} >
      <SolutionOutlined style={{fontSize:'100px',color:'white'}} /> <br/><br/>
   <a href="/faq" className="footericon1" >FAQ</a>      </Col>
   <Col className="gutter-row"   span={4}>
      <InfoCircleOutlined style={{fontSize:'100px',color:'white'}} /> 
   <br/><br/>
   <a href="/contact" className="footericon1">ABOUT US</a>      </Col>
   <Col className="gutter-row"  span={4}>
      <AliwangwangOutlined style={{fontSize:'100px',color:'white'}} /> 
   <br/><br/>
   <a href="/feedback" className="footericon1" >FEEDBACK</a>      </Col>
   <Col className="gutter-row" >
      <DesktopOutlined style={{fontSize:'100px',color:'white'}} /> 
   <br/><br/>
   <a href="/landingpage" className="footericon1" span={4}>BOX OFFICE</a>      </Col>
    </Row>
    <br/><br/> 

</div>
<br/>
<p style={{ textAlign: 'center' }}>All rights received ©2021 Created by TicketEzy Dev Team</p>
   
    </div>
);
}

export default Footer;