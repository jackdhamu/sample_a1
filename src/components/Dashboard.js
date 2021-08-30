import React from 'react';
import { PageHeader, Card, Layout, Row } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BankOutlined , AccountBookOutlined } from '@ant-design/icons';
import NavHeader from 'components/NavHeader';

const { Footer } = Layout;


class Dashboard extends React.Component {

  render() {
    return (
      <>
        <Layout>
          <NavHeader/>
          <PageHeader
            ghost={false}
            onBack={false}
            title="Dashboard"
          />
          <div className={'container'}>
            <Card className={'dashboard-card'}>
              <Row>
                <NavLink to={'theaters'}>
                  <Card>
                    <BankOutlined style={{ fontSize: '20px' }}/>
                      Theater Details
                  </Card>
                </NavLink>
                {/*<NavLink to={'users'}>*/}
                {/*  <Card>*/}
                {/*    <UsergroupAddOutlined style={{ fontSize: '20px' }}/>*/}
                {/*    Users Details*/}
                {/*  </Card>*/}
                {/*</NavLink>*/}
              </Row>
            </Card>
          </div>
          <Footer style={{ textAlign: 'center' }}>All rights received ©2021 Created by TicketEzy Dev Team</Footer>
        </Layout>
      </>
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
    userId,
    userFirstName,
    userLastName,
    userEmail,
    userProfileLink,
    searchValue,
    viewType,
  } = state.usersReducer;
  return {
    userData,
    userTableLoader,
    totalUsers,
    createUserDrawerVisible,
    submitLoader,
    userId,
    userFirstName,
    userLastName,
    userEmail,
    userProfileLink,
    searchValue,
    viewType,
  };
};

export default connect(mapStateToProps)(Dashboard);
