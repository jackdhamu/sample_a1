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
  
  {
    path: 'landingpage',
    component: lazy(() => import('components/Landingpage')),
    exact: true,
  },
  {
    path: 'contact',
    component: lazy(() => import('components/Contact')),
    exact: true,
  },
  {
    path: 'faq',
    component: lazy(() => import('components/Faq')),
    exact: true,
  },
  {
    path: 'feedback',
    component: lazy(() => import('components/Feedback')),
    exact: true,
  },
  {
    path: 'events',
    component: lazy(() => import('components/Events')),
    exact: true,
  },
  {
    path: 'movies',
    component: lazy(() => import('components/Movies')),
    exact: true,
  },
  {
    path: 'login',
    component: lazy(() => import('components/LoginPage')),
    exact: true,
  },
  {
    path: 'offers',
    component: lazy(() => import('components/Offers')),
    exact: true,
  },
  {
    path: 'signup',
    component: lazy(() => import('components/SignUp')),
    exact: true,
  },
  {
    path: 'userlogin',
    component: lazy(() => import('components/UserLogin')),
    exact: true,
  },
  {
    path: 'forgetpassword',
    component: lazy(() => import('components/ForgetPassword')),
    exact: true,
  },
  {
    path: 'seatbooking',
    component: lazy(() => import('components/SeatBooking')),
    exact: true,
  },
  {
    path: 'theatrea',
    component: lazy(() => import('components/TheatreDrawer')),
    exact: true,
  }, 
];

export default routes;
