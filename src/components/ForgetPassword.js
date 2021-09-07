import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footerr from "./ContactFooter";
import NavHeader from "./NavHeader";
import { Form, Input, Button, } from 'antd';

const ForgetForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 6,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item

        wrapperCol={{
          offset: 8,
          span: 8,
        }}
        name="Email ID"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          placeholder="Email ID" />
      </Form.Item>
      <br />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit" block>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};
class ForgetPassword extends React.Component {

  render() {
    return (
      <div>
        <NavHeader />
        <br />
        <Content className="site-layout" style={{ padding: '0 50px', margin: 60 }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}> Forgot Password</h2>
          <p style={{ textAlign: 'center' }}>Please enter your email ID to receive password.</p>
          <br />
          <ForgetForm />
          <br />
        </Content>
        <br />
        <Footerr />
      </div>
    );
  }
}

export default ForgetPassword;