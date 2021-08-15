import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('components/Dashboard')),
    exact: true,
  },
  {
    path: 'users/:secret_key',
    component: lazy(() => import('components/Users')),
    exact: true,
  },
  {
    path: 'theaters',
    component: lazy(() => import('components/Theaters')),
    exact: true,
  },
];

export default routes;
