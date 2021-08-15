import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const InitialLoader = () => (
  <Spin
    indicator={<LoadingOutlined spin />}
    className={'initial-loading'}
  />
);
