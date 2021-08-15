import React from 'react';
import {Button, Layout, Space} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import actions from 'redux/Authenticate/actions';
import { connect } from 'react-redux';

const { Header } = Layout;

class NavHeader extends React.Component{

  logOut = () => {
    // Add logout logic
    this.props.dispatch({
      type: actions.LOGOUT,
    });
  };

  render() {
    const { title } = this.props;
    return (
      <Header>
        <div className="header-title">
          <Space size="large">
            {/*Display current logged user name and email*/}
            <div className={'main-title'}>TicketEzy</div>
            <NavLink to={'/login'}>
              <Button type="primary" icon={<LogoutOutlined/>} danger onClick={this.logOut}/>
            </NavLink>
          </Space>
        </div>
      </Header>
    );
  }
}

export default connect()(NavHeader);
