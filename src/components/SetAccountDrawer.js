import React from 'react';
import { Drawer, Button, Form, Input } from 'antd';
import actions from 'redux/Theaters/actions';
import { connect } from 'react-redux';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class SetAccountDrawer extends React.Component {
  formRef = React.createRef();

  onClose = () => {
    this.props.dispatch({
      type: actions.SET_ACCOUNT_DRAWER_VISIBLE,
      payload: false,
    });
  };

  onSubmit = () => {

  };

  render() {
    const {
      setAccountDrawerVisible,
      submitLoader,
    } = this.props;
    return (
      <Drawer
        title={
          "Set Account"
        }
        width={400}
        onClose={this.onClose}
        visible={setAccountDrawerVisible}
        destroyOnClose={true}
        footer={
          <div
            style={{
              textAlign: 'right  ',
            }}
          >
            <Button
              onClick={this.onClose}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button
              onClick={this.onSubmit}
              loading={submitLoader}
              type="primary"
            >
              Create
            </Button>
          </div>
        }
      >
        <Form ref={this.formRef} layout="vertical">
          <Form.Item
            name="account_name"
            label="Account Name"
            rules={[{ required: true, message: 'Please enter account name' }]}

          >
            <Input placeholder="Please enter account name" />
          </Form.Item>
          <Form.Item
            name="account_number"
            label="Account Number"
            rules={[{ required: true, message: 'Please enter account number' }]}
          >
            <Input placeholder="Please enter account number" />
          </Form.Item>
          <Form.Item
            name="bank_name"
            label="Bank Name"
            rules={[{ required: true, message: 'Please enter bank name' }]}
          >
            <Input placeholder="Please enter bank name" />
          </Form.Item>
          <Form.Item
            name="ifsc_code"
            label="IFSC Code"
            rules={[{ required: true, message: 'Please enter IFSC code' }]}
          >
            <Input placeholder="Please enter IFSC Code" />
          </Form.Item>
          <Form.Item
            name="branch_name"
            label="Branch Name"
            rules={[{ required: true, message: 'Please enter branch name' }]}
          >
            <Input placeholder="Please enter branch name" />
          </Form.Item>
          <Form.Item
            name="pan_number"
            label="PAN Number"
            rules={
              [
                { required: true, message: 'Please enter PAN number' },
                { min: 10, message: 'PAN number should be 10 digits' },
                { max: 10, message: 'PAN number should be 10 digits' },
              ]
            }
          >
            <Input placeholder="Please enter  PAN number" />
          </Form.Item>
          <Form.Item
            name="gst_number"
            label="GST Number"
            rules={
              [
                { required: true, message: 'Please enter GST number' },
                { min: 15, message: 'GST number should be 15 digits' },
                { max: 15, message: 'GST number should be 15 digits' },
              ]
            }
          >
            <Input placeholder="Please enter  GST number" />
          </Form.Item>
          <Form.Item
            name="aadhar_number"
            label="Aadhar Number"
            rules={
              [
                { required: true, message: 'Please enter Aadhar number' },
                { min: 12, message: 'Aadhar number should be 12 digits' },
                { max: 12, message: 'Aadhar number should be 12 digits' },
              ]
            }
          >
            <Input placeholder="Please enter  Aadhar number" />
          </Form.Item>
          <Form.Item
            name="cancel_cheque"
            label="Cancel Checqe"
            rules={[{ required: true, message: 'Please upload cancel checqe pdf/jpeg' }]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="c_form"
            label="C Form"
            rules={[{ required: true, message: 'Please upload c form pdf/jpeg' }]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="noc_form"
            label="Noc Form"
            rules={[{ required: true, message: 'Please upload noc form pdf/jpeg' }]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Drawer>
    );
  };
}

export default connect()(SetAccountDrawer);
