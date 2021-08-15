import React from 'react';
import { Avatar, Button, Space, Table, Popconfirm } from 'antd';
import actions from 'redux/Users/actions';
import { connect } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

const tableWidth = '100%';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Profile',
          // dataIndex: 'avatar',
          width: '30%',
          align: 'left',
          render: () => <div>
            <Avatar size={64} icon={<UserOutlined />} />
          </div>,
        },
        {
          title: 'Employee Name',
          dataIndex: 'name',
          width: '30%',
        },
        {
          title: 'Action',
          key: '',
          render: (data,rowDate) => (
            <Space size="middle">
              <Button type="primary" onClick={() => this.editUser(rowDate)}>Edit</Button>
              <Popconfirm
                title={'Are you sure to delete user ?'}
                onConfirm={() => this.deleteUser(data.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>Delete</Button>
              </Popconfirm>
            </Space>
          ),
        },
      ],
    }
  }

  editUser = values => {
    this.props.dispatch({
      type: actions.SET_USER_DRAWER_VISIBLE,
      payload: true,
    });
    this.props.dispatch({
      type: actions.SET_USER_DETAILS,
      payload: values,
    });
  };

  deleteUser = userID => {
    //Add delete action
    this.props.dispatch({
      type: actions.DELETE_USER,
      payload: userID,
    });
  };

  // handleTableChange = (pagination, filters, sorter) => {
  //   this.props.dispatch({
  //     type: actions.GET_USERS,
  //     payload: { currentPage: pagination.current },
  //   });
  // };

  render() {
    const { userData, userTableLoader, totalUsers, searchValue } = this.props;
    let searchedData = [];
    if(searchValue !== '' && searchValue?.trim() !== '' && searchValue) {
      searchedData = userData.filter(data => data.name.includes(searchValue))
    } else {
      searchedData = userData;
    }
    console.log('jack data', userData)
    return (
      <Table
        columns={this.state.columns}
        rowKey={record => record.id}
        dataSource={searchedData}
        loading={userTableLoader}
        // onChange={this.handleTableChange}
        scroll={{
          x: tableWidth,
          // y: getTableHeight()
        }}
        pagination={{pageSize: 5, total: totalUsers}}
      />
    );
  }
}

export default connect()(UserTable);

