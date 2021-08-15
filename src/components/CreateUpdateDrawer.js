import React from 'react';
import { Drawer, Button, Form, Input, Checkbox } from 'antd';
import actions from 'redux/Users/actions';
import { connect } from 'react-redux';

const CheckboxGroup = Checkbox.Group;
const permissionOptions = [
  { key:1, value:'Seats Update'},
  { key:2, value:'Ticket Punch'},
  { key:3, value:'Ticket Cancel'},
  { key:4, value:'Refund'},
];

class CreateUpdateDrawer extends React.Component {
  formRef = React.createRef();

  onClose = () => {
    this.props.dispatch({
      type: actions.SET_USER_DRAWER_VISIBLE,
      payload: false,
    });
  };

  onSubmit = () => {
    const { secretKey } = this.props;
    this.formRef.current
      .validateFields()
      .then((values) => {
        this.formRef.current.resetFields();
        this.props.dispatch({
          type: actions.CREATE_USER,
          payload: values,
          secretKey,
        });
      })
  };

  render() {
    const {
      createUserDrawerVisible,
      submitLoader,
      userDetails,
    } = this.props;
    console.log('jack userDetailsuserDetails', userDetails)
    return (
      <Drawer
        title={
          userDetails.id? 'Edit User': 'Create New User'
        }
        width={400}
        onClose={this.onClose}
        visible={createUserDrawerVisible}
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
              {userDetails.id? 'Update': 'Create'}
            </Button>
          </div>
        }
      >
        <Form ref={this.formRef} layout="vertical">
          <Form.Item
            name="name"
            label="Employee Name"
            rules={[{required: true, message: 'Please enter name'}]}
          >
            <Input placeholder="Please enter name" defaultValue={userDetails.name}/>
          </Form.Item>
          <Form.Item
            name="rights"
            label="Permissions"
            rules={[{required: true, message: 'Please select permissions'}]}
            initialValue={userDetails.rights}
          >
            <CheckboxGroup className={'permission-group'}>
              {permissionOptions.map(
                data=><Checkbox value={data.key}>{data.value}</Checkbox>,
              )}
            </CheckboxGroup>
          </Form.Item>
        </Form>
      </Drawer>
    );
  };
}

export default connect()(CreateUpdateDrawer);
