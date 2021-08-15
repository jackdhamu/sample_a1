import React from 'react';
import {Descriptions, PageHeader} from 'antd';

class UserDetails extends React.Component{
  render() {
    return (
      <>
        <PageHeader
          ghost={false}
          // onBack={true}
          title="User Details"
        />
        <Descriptions bordered style={{paddingTop: '20px'}}>
          <Descriptions.Item label="First Name">Elon</Descriptions.Item>
          <Descriptions.Item label="Last Name">Musk</Descriptions.Item>
          <Descriptions.Item label="Email">elon@tesla.com</Descriptions.Item>
          <Descriptions.Item label="Profile">empty</Descriptions.Item>
        </Descriptions>
      </>
    );
  }
}


export default UserDetails;
