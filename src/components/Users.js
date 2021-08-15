import React from 'react';
import actions from 'redux/Users/actions';
import {Button, PageHeader, Input, Radio, Layout } from 'antd';
import UserTable from 'components/UserTable';
import CreateUpdateDrawer from 'components/CreateUpdateDrawer';
import { connect } from 'react-redux';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import UserCardView from 'components/UserCardView';
import NavHeader from 'components/NavHeader';

const { Search } = Input;
const { Footer } = Layout;


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    const url = window.location.pathname.split('/');
    this.props.dispatch({
      type: actions.GET_USERS,
      payload: url[2],
    });
  }

    openCreateUserDrawer = () => {
      this.props.dispatch({
        type: actions.SET_USER_DRAWER_VISIBLE,
        payload: true,
      });
    };

    onSearch = value => {
      this.props.dispatch({
        type: actions.SEARCH_USER_DETAILS,
        payload: value,
      });
    };

    handleViewType = event => {
      // Add search logic
      this.props.dispatch({
        type: actions.HANDLE_VIEW_TYPE,
        payload: event.target.value,
      });
    };

    render() {
      const {
        userData,
        userTableLoader,
        createUserDrawerVisible,
        submitLoader,
        searchValue,
        viewType,
        userDetails,
      } = this.props;
      const url = window.location.pathname.split('/');
      return (
        <Layout>
          <NavHeader/>
          <PageHeader
            ghost={false}
            onBack={false}
            title="Users"
            extra={[
              <Search
                key="1"
                placeholder="input search text"
                allowClear
                style={{width: '200px'}}
                onSearch={this.onSearch}
              />,
              <Button key="2" type="primary" onClick={this.openCreateUserDrawer}>Create User</Button>,
            ]}
            footer={
              <Radio.Group value={viewType} size="small" onChange={this.handleViewType} style={{ padding: '20px'}}>
                <Radio.Button value="table">
                  <TableOutlined style={{marginRight: '5px'}}/>
                  Table
                </Radio.Button>
                <Radio.Button value="card">
                  <UnorderedListOutlined style={{marginRight: '5px'}}/>
                  Card
                </Radio.Button>
              </Radio.Group>
            }
          />
          {viewType === 'table'?
            <UserTable
              userData={userData}
              userTableLoader={userTableLoader}
              searchValue={searchValue}
            />:
            <UserCardView
              userData={userData}
              userTableLoader={userTableLoader}
            />
          }
          <CreateUpdateDrawer
            createUserDrawerVisible={createUserDrawerVisible}
            submitLoader={submitLoader}
            userDetails={userDetails}
            secretKey={url[2]}
          />
          <Footer style={{ textAlign: 'center' }}>All rights received ©2021 Created by TicketEzy Dev Team</Footer>
        </Layout>
      );
    }
}

const mapStateToProps = state => {
  const {
    userData,
    userTableLoader,
    totalUsers,
    createUserDrawerVisible,
    submitLoader,
    userDetails,
    searchValue,
    viewType,
  } = state.usersReducer;
  return {
    userData,
    userTableLoader,
    totalUsers,
    createUserDrawerVisible,
    submitLoader,
    userDetails,
    searchValue,
    viewType,
  };
};

export default connect(mapStateToProps)(Users);
