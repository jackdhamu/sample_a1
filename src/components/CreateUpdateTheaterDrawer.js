import React from 'react';
import { Drawer, Button, Form, Input, Select } from 'antd';
import actions from 'redux/Theaters/actions';
import { connect } from 'react-redux';

const { Option } = Select;

class CreateUpdateTheaterDrawer extends React.Component {
  formRef = React.createRef();

  onClose = () => {
    this.props.dispatch({
      type: actions.SET_THEATER_DRAWER_VISIBLE,
      payload: false,
    });
  };

  onSubmit = () => {
    const { theaterData } = this.props;
    this.formRef.current
      .validateFields()
      .then((values) => {
        if(theaterData.id) {
          this.props.dispatch({
            type: actions.UPDATE_THEATER,
            payload: values,
            secretKey: theaterData.secret,
          });
        } else {
          this.props.dispatch({
            type: actions.REGISTER_THEATER,
            payload: values,
          });
        }
        this.formRef.current.resetFields();
      })
  };

  render() {
    const {
      createTheaterDrawerVisible,
      submitLoader,
      theaterData,
    } = this.props;
    return (
      <Drawer
        title={
          theaterData.id? 'Edit Theater': 'Create New Theater'
        }
        width={400}
        onClose={this.onClose}
        visible={createTheaterDrawerVisible}
        destroyOnClose={true}
        footer={
          <div
            style={{
              textAlign: 'right  ',
            }}
          >
            <Button
              onClick={this.onClose}
              style={{marginRight: 8}}
            >
              Cancel
            </Button>
            <Button
              onClick={this.onSubmit}
              loading={submitLoader}
              type="primary"
            >
              {theaterData.id? 'Update': 'Create'}
            </Button>
          </div>
        }
      >
        <Form ref={this.formRef} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{required: true, message: 'Please enter name'}]}
            initialValue={theaterData.name}
          >
            <Input placeholder="Please enter name" />
          </Form.Item>
          <Form.Item
            name="owner"
            label="Owner Name"
            rules={[{required: true, message: 'Please enter owner name'}]}
            initialValue={theaterData.owner}
          >
            <Input placeholder="Please enter owner name"/>
          </Form.Item>
          <Form.Item
            name="mobile"
            label="Mobile No"
            rules={[{required: true, message: 'Please enter mobile number'}]}
            initialValue={theaterData.mobile}
          >
            <Input placeholder="Please enter mobile number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{required: true, message: 'Please enter address'}]}
            initialValue={theaterData.address}
          >
            <Input placeholder="Please enter theater address" />
          </Form.Item>
          <Form.Item
            name="place"
            label="Place"
            rules={[{required: true, message: 'Please enter place'}]}
            initialValue={theaterData.place}
          >
            <Input placeholder="Please enter theater place" />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location (map)"
            rules={[{required: true, message: 'Please enter location'}]}
            initialValue={theaterData.location}
          >
            <Input placeholder="Please enter theater location" />
          </Form.Item>
          <Form.Item
            name="since"
            label="Started Year"
            rules={[{required: true, message: 'Please enter started date'}]}
            initialValue={theaterData.since}
          >
            <Input placeholder="Please enter theater started date" />
          </Form.Item>
          <Form.Item
            name="theatre_type"
            label="Theatre Type"
            rules={[{required: true, message: 'Please enter Theatre Type'}]}
            initialValue={theaterData.theatre_type}
          >
            <Select placeholder="Please select Theatre Type">
              <Option value={'ac'}>A/C</Option>
              <Option value={'non_ac'}>Non - A/C</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pan_number"
            label="PAN Number"
            rules={
              [
                {required: true, message: 'Please enter PAN number'},
                { min: 10, message: 'PAN number should be 10 digits'},
                { max: 10, message: 'PAN number should be 10 digits'},
              ]
            }
            initialValue={theaterData.pan_number}
          >
            <Input placeholder="Please enter Theatre PAN number" />
          </Form.Item>
          <Form.Item
            name="gst_number"
            label="GST Number"
            rules={
              [
                {required: true, message: 'Please enter GST number'},
                { min: 15, message: 'GST number should be 15 digits'},
                { max: 15, message: 'GST number should be 15 digits'},
              ]
            }
            initialValue={theaterData.gst_number}
          >
            <Input placeholder="Please enter Theatre GST number" />
          </Form.Item>
          <Form.Item
            name="aadhar_number"
            label="Aadhar Number"
            rules={
              [
                {required: true, message: 'Please enter Aadhar number'},
                { min: 12, message: 'Aadhar number should be 12 digits'},
                { max: 12, message: 'Aadhar number should be 12 digits'},
              ]
            }
            initialValue={theaterData.aadhar_number}
          >
            <Input placeholder="Please enter Theatre Aadhar number" />
          </Form.Item>
          {/*<Form.Item*/}
          {/*  name="avatar"*/}
          {/*  label="Profile Image Link"*/}
          {/*  rules={[{required: true, message: 'Please enter profile image link'}]}*/}
          {/*>*/}
          {/*  <Input placeholder="Please enter profile image link" defaultValue={userProfileLink}/>*/}
          {/*</Form.Item>*/}
        </Form>
      </Drawer>
    );
  };
}

export default connect()(CreateUpdateTheaterDrawer);
