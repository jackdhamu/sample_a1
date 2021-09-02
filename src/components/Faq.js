import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import Footer from './ContactFooter';
import NavHeader from './NavHeader';

class Faq extends React.Component {

    render() {
        return (
            <div>
                <NavHeader />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 60 }}>
                    <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}>FAQ</h2>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Faq;