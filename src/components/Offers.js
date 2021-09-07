import { Card } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import NavHeader from './NavHeader';
import offerimage from '../images/offers.jpg'
import Footer from './ContactFooter';

const { Meta } = Card;
 
class Offer extends React.Component{

    render(){
        return(
            <div>
                <NavHeader/>
                <Content className="site-layout" style={{ padding: '0 50px', margin: 60}}>
                <h2 style={{textAlign:'center', textDecoration:'underline',textDecorationColor:'coral',textDecorationThickness:'2.5px',}}>OFFERS</h2>
                <Card
                  hoverable
                  style={{ width: 340 }}
                  cover={<img alt="example" src={offerimage} />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </Content>
                <Footer/>
            </div>
        );
    }
}
export default Offer;