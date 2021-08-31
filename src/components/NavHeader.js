import React from 'react';
import {Button, Layout, Space} from 'antd';
import {LogoutOutlined,UserOutlined} from '@ant-design/icons';
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
        <div className="header-title" style={{textAlign:'center'}}>
          <Space size="large">
            {/*Display current logged user name and email*/}
            <div className={'main-title'}>TicketEzy</div>
            
            <div>
              <NavLink to={'/login'}>
                <Button type="primary" icon={<LogoutOutlined/>} danger onClick={this.logOut}/>
              </NavLink>
              <NavLink className="Navlink" to={'/landingpage'} className="Navlink">
             HOME
              </NavLink>
              <NavLink to={'/movies'} className="Navlink">
             MOVIES
              </NavLink>
              <NavLink to={'/landingpage'} className="Navlink">
             THEATRES
              </NavLink>
              <NavLink to={'/events'} className="Navlink">
             EVENTS
              </NavLink>
              <NavLink to={'/landingpage'} className="Navlink">
             ORDERS
              </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink style={{textAlign:'right'}} to={'/login'} className="Navlink">
              <UserOutlined />&nbsp;
             LOGIN/SIGN UP
              </NavLink>
              <NavLink style={{textAlign:'right'}} to={'/offers'} className="Navlink">
              OFFERS
              </NavLink>
            </div>
          
          </Space>
         
        </div>
      </Header>
    );
  }
}

export default connect()(NavHeader);
