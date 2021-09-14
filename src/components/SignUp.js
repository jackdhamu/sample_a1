import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footerr from "./ContactFooter";
import NavHeader from "./NavHeader";
import { Form, Input, Button, } from 'antd';
import { connect } from "react-redux";
import actions from "redux/SignUp/actions";

class Signup extends React.Component {
  formRef = React.createRef();

  onSubmit = () => {
    this.formRef.current
      .validateFields()
      .then((values) => {
        this.props.dispatch({
          type: actions.REGISTER_USER,
          payload: values,
        });

        this.formRef.current.resetFields();
      })
  };

  render() {
    const {
      submitLoader,

    } = this.props;
    return (
      <div>
        <NavHeader />
        <Content className="site-layout" style={{ padding: '0 50px', margin: 60 }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}>SIGN UP</h2>
          <br />
          <Form
            ref={this.formRef}
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 6,
            }}
            initialValues={{
              remember: true,
            }}

            autoComplete="off"
          >
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
              name="Email ID"
            >
              <Input
                placeholder="Email ID" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
              name="Mobile Number"
            >
              <Input
                placeholder="Mobile Number" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
              name="First Name"
            >
              <Input
                placeholder="First Name" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
              name="Last Name"
            >
              <Input
                placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7
              }}
              name="Password"
            >
              <Input
                placeholder="Password" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
              name="Confirm Password"
            >
              <Input
                placeholder="Confirm Password" />
            </Form.Item>
            <br />
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 7,
              }}
            >
              <Button type="primary" htmlType="submit"
                loading={submitLoader}
                onClick={this.onSubmit}
                block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footerr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    submitLoader,
    userList,
    userListLoader,
    userDataLoader,
    userData,
  } = state.signupReducer;
  return {
    submitLoader,
    userList,
    userListLoader,
    userDataLoader,
    userData,
  };
};

export default connect(mapStateToProps)(Signup);