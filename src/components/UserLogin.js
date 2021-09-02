import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footerr from "./ContactFooter";
import NavHeader from "./NavHeader";
import { Form, Input, Button, Row, Col } from 'antd';
import actions from "redux/UserLogin/actions";
import { connect } from "react-redux";

class Userlogin extends React.Component {

  onFinish = (values) => {
    this.props.dispatch({
      type: actions.LOGIN,
      payload: { 'user_name': values.user_name, 'password': values.password },
    });
  };

  render() {

    return (
      <div>
        <NavHeader />
        <br />
        <Content className="site-layout" style={{ padding: '0 50px', margin: 60 }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}> Login</h2>
          <br />
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
            onFinish={this.onFinish}
            autoComplete="off"
          >
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
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
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7
              }}
              name="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                placeholder="Password" />
            </Form.Item>
            <br />
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
            >
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <br />
          <Row>
            <Col offset={9} span={3}>
              <a href="/forgetpassword">Forget Password?</a>
            </Col>
            <Col span={5} >
              <p>Don't have an account? &nbsp;<span><a href="/signup">SignUp</a></span> </p>
            </Col>
          </Row>
        </Content>
        <br />
        <Footerr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loader } = state.userloginReducer;
  return { loader }
};
export default connect(mapStateToProps)(Userlogin);