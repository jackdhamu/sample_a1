import React from 'react';
import { Button, Space, Table, Popconfirm, Badge, Switch } from 'antd';
import actions from 'redux/Theaters/actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const tableWidth = '100%';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        // {
        //   title: 'Profile',
        //   dataIndex: 'avatar',
        //   width: '20%',
        //   align: 'center',
        //   render: (avatar) => <Avatar size={80} src={avatar} alt={'profile-image'}/>,
        // },
        {
          title: 'Theatre ID',
          dataIndex: 'support_id',
          width: '10%',
          render: value => <b>{value}</b>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          width: '40%',
          render: (name,rowData) =>
            <>
              {rowData.status === 'active' ?
                <NavLink to={`users/${rowData.secret}`}>
                  {rowData.status === 'created'?
                    <Badge.Ribbon text="New">
                      <div>
                        {name}
                      </div>
                    </Badge.Ribbon>:
                    <div>
                      {name}
                    </div>
                  }
                </NavLink>
                :
                <span>{name}</span>
              }
            </>
          ,
        },
        {
          title: 'Type',
          dataIndex: 'theatre_type',
          width: '10%',
          render: value => (value === 'ac' ? 'A/C' : 'Non A/C'),

        },
        {
          title: 'Address',
          dataIndex: 'address',
          width: '20%',
        },
        {
          title: 'Location (map)',
          dataIndex: 'location',
          width: '20%',
          render: value=> <a href={value} target={'_blank'} rel="noreferrer">{value}</a>,
        },
        {
          title: 'Status',
          width: '20%',
          key: '',
          render: (data,rowDate) => (
            <Space size="middle">
              <Popconfirm
                title={'Are you sure to change theater status ?'}
                onConfirm={() => this.changeStatus(data)}
                okText="Yes"
                cancelText="No"
              >
                <Switch style={{ width: '90px' }} checkedChildren="Active" unCheckedChildren="In-Active" checked={rowDate.status === 'active'}/>
              </Popconfirm>
            </Space>
          ),
        },
        {
          title: 'Action',
          key: '',
          render: (data,rowDate) => (
            <Space size="middle">
              <Button 
                type="primary"
                onClick={() => this.editUser(rowDate)}
                disabled={rowDate.status !== 'active'}
              >
                Edit
              </Button>
              <Popconfirm
                title={'Are you sure to delete theater ?'}
                onConfirm={() => this.deleteUser(data.secret)}
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
      type: actions.SET_THEATER_DRAWER_VISIBLE,
      payload: true,
    });
    this.props.dispatch({
      type: actions.SET_THEATER_DETAILS,
      payload: values,
    });
  };

  deleteUser = key => {
    //Add delete action
    this.props.dispatch({
      type: actions.DELETE_THEATER,
      payload: key,
      status: 'removed',
    });
  };

  changeStatus = data => {
    this.props.dispatch({
      type: actions.DELETE_THEATER,
      payload: data.secret,
      status: data.status === 'active' ? 'inactive': 'active',
    });
  };

  // handleTableChange = (pagination, filters, sorter) => {
  //   this.props.dispatch({
  //     type: actions.GET_THEATERS,
  //     payload: { currentPage: pagination.current },
  //   });
  // };

  render() {
    const { tableData, tableLoader, searchValue } = this.props;
    let searchedData = [];
    let filterData = tableData.filter(data => data.status !== 'removed');
    if(searchValue !== '' && searchValue?.trim() !== '' && searchValue) {
      searchedData = filterData.filter(data => data.name.includes(searchValue))
    } else {
      searchedData = filterData;
    }
    return (
      <Table
        columns={this.state.columns}
        rowKey={record => record.id}
        dataSource={searchedData}
        loading={tableLoader}
        // onChange={this.handleTableChange}
        scroll={{
          x: tableWidth,
          // y: getTableHeight()
        }}
        pagination={{pageSize: 5, total: tableData.length}}
      />
    );
  }
}

export default connect()(UserTable);

