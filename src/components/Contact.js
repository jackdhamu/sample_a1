import { MailOutlined,PhoneOutlined } from '@ant-design/icons';
import { Content  } from 'antd/lib/layout/layout';
import React from 'react';
import Footerr from './ContactFooter';
import NavHeader from './NavHeader';


class Contact extends React.Component{

    render(){
        return(
            <div>
                <NavHeader/>
                
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 60}}>
                <h2 style={{textAlign:'center', textDecoration:'underline',textDecorationColor:'coral',textDecorationThickness:'2.5px',}}>CONTACT US</h2>
                <div style={{textAlign:"left"}}>
                <h3><b>Send your feedback</b></h3>
                <p>Orbgen Technologies pvt.ltd, Sree Teja Tower, First Floor, New no 81, Old no 130, Nelson Manickam Road, Chennai-600 029</p>
                <br/>
                <hr/>
                <h3><b>Support services (24 x 7)</b></h3>
                <a href="#"><span><MailOutlined /></span> &nbsp;support@ticketnew.com</a><br/>
                <p><span><PhoneOutlined  /></span> &nbsp;95874 12155</p><br/>
                <hr/>
                <h3><b>Career opportunities</b></h3>
                <a href="#"><span><MailOutlined /></span> &nbsp;support@ticketnew.com</a><br/><br/><br/><hr/>
                <h3><b>To advertise in the site</b></h3>
                <a href="#"><span><MailOutlined /></span> &nbsp;support@ticketnew.com</a><br/><br/><br/><hr/>
                <h3><b>Theatre owners/Event organisers want to sell tickets</b></h3>
                <a href="#"><span><MailOutlined /></span> &nbsp;support@ticketnew.com</a><br/><br/><br/><hr/>
                <h3><b>To build business alliance</b></h3>
                <p>If you would like to build business alliance with us and have an interesting proposal, please contact us at</p>
                <a href="#"><span><MailOutlined /></span> &nbsp;support@ticketnew.com</a><br/><br/><br/>

                </div>
                </Content><br/><br/><br/><br/><br/><br/><br/>
                <Footerr/>
            </div>
        );
    }
}

export default Contact;