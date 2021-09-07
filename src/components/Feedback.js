import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import NavHeader from './NavHeader';
import { Form, Input, Button, Radio } from 'antd';
import Footer from './ContactFooter';

const { TextArea } = Input;
class Feedback extends React.Component {

  render() {
    return (
      <div>
        <NavHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 60, marginLeft: 50 }}>
          <h2 style={{ textAlign: 'left', textDecoration: 'underline', textDecorationColor: 'coral', textDecorationThickness: '2.5px', }}>FEEDBACK</h2>
          <br />
          <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
            >
              Email
              <Input />
            </Form.Item>
            <Form.Item
              name="mobile no"
            >
              Mobile No
              <Input />
            </Form.Item>
            <Form.Item
            >
              Please select Feedback type <br /><br />
              <Radio.Group>
                <Radio value="a">Bug</Radio>
                <Radio value="b">Feature</Radio>
                <Radio value="c">Feedback</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <TextArea></TextArea>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Feedback;