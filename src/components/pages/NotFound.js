import React, { Fragment } from 'react';
import { Button, Card, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import 'components/pages/style.scss';
import errorImage from 'images/404-image.svg';

const { Title, Text } = Typography;

const NotFound = () => (
  <Fragment>
    <div
      className={'content-layout-body not-found-page'}
    >
      <Card
        style={{ width: '100%' }}
        className={'content-page'}
      >
        {window.screen.width > 930 && (
          <div className={'error-image'}>
            <img src={errorImage} alt="error" />
          </div>
        )}
        <div className={'error-content'}>
          <Card bordered={false}>
            <Title>404</Title>
            <Text>
              Page Not Found
            </Text>
            <p>
              <Fragment>Go to</Fragment>{' '}
              <Button
                type={'primary'}
                size={window.screen.width <= 500 ? 'small' : 'large'}
              >
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
              </Button>{' '}
                or{' '}
              <Button
                type={'primary'}
                size={window.screen.width <= 500 ? 'small' : 'large'}
              >
                Contact Support
              </Button>
            </p>
          </Card>
        </div>
      </Card>
    </div>
  </Fragment>
);

export default NotFound;
