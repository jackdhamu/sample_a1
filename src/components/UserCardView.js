import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { connect } from 'react-redux';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import actions from '../redux/Users/actions';
import { UserOutlined } from '@ant-design/icons';

class UserDetails extends React.Component {
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

  render() {
    const { userData } = this.props;
    return (
      <div className={'user-card-view'}>
        <Row gutter={22}>
          {userData.map(user =>
            <Col span={8}>
              <Card className={'user-card'}>
                <div>
                  <Avatar size={120} icon={<UserOutlined />} />
                </div>
                <h1>
                  <span>{user.name}</span>
                </h1>
                {/*<h2 className={'text-secondary'}>{user.email}</h2>*/}
                <div className={'card-hover'} id={`card-overlay_${user.id}`}>
                  <div className={'status-action'}>
                    <div className={'item edit'} onClick={() => this.editUser(user)}>
                      <EditOutlined />
                    </div>
                    <div className={'item delete'} onClick={() => this.deleteUser(user.id)}>
                      <DeleteOutlined />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>)}
        </Row>
      </div>
    );
  };
}


export default connect()(UserDetails);
