import React from 'react';
import {connect} from 'react-redux'
import actions from 'redux/Authenticate/actions';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import NavHeader from 'components/NavHeader';

const { Header, Footer } = Layout;

class LoginPage extends React.Component {

 onFinish = (values) => {
   this.props.dispatch({
     type: actions.LOGIN,
     payload: {'user_name': values.user_name, 'password': values.password},
   });
 };

 render()
 {
   return (
     <Layout>
       <NavHeader />
       <div className="container">
         <Form
           name="normal_login"
           className="login-form"
           initialValues={{
             remember: true,
           }}
           onFinish={this.onFinish}
         >
           <h3>Login Form</h3>
           <Form.Item
             name="user_name"
             rules={[
               {
                 required: true,
                 message: 'Please input your UserID!',
               },
             ]}
           >
             <Input size="large"
               prefix={<UserOutlined className="site-form-item-icon"/>}
               placeholder="User ID"
             />
           </Form.Item>
           <Form.Item
             name="password"
             rules={[
               {
                 required: true,
                 message: 'Please input your Password!',
               },
             ]}
           >
             <Input
               prefix={<LockOutlined className="site-form-item-icon"/>}
               type="password"
               placeholder="Password"
               size="large"
               autoComplete="current-password"
             />
           </Form.Item>
           <Form.Item>
             <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox>Remember me</Checkbox>
             </Form.Item>
           </Form.Item>

           <Form.Item>
             <Button loading={this.props.loader} type="primary" htmlType="submit" className="login-form-button"
               size="large">Log in
             </Button>
           </Form.Item>
         </Form>
       </div>
       <Footer style={{ textAlign: 'center' }}>All rights received ©2021 Created by TicketEzy Dev Team</Footer>
     </Layout>
   );
 }
}

const mapStateToProps = state => {
  const { loader } = state.authenticateReducer;
  return { loader }
};

export default connect(mapStateToProps)(LoginPage);
