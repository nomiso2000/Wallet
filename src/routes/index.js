import { lazy } from 'react';

const routes = {
  HOME: {
    path: `/home`,
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
  },

  LOGIN: {
    path: `/login`,
    component: lazy(() =>
      import('../pages/Login' /* webpackChunkName: "Login" */),
    ),
  },

  REGISTER: {
    path: `/register`,
    component: lazy(() =>
      import('../pages/Register' /* webpackChunkName: "Register" */),
    ),
  },
  STATISTIC: {
    path: `/statistic`,
    component: lazy(() =>
      import('../pages/Statictic' /* webpackChunkName: "Statistic" */),
    ),
  },

  NAVIGATION: {
    path: `/`,
    component: lazy(() =>
      import('../pages/Navigation' /* webpackChunkName: "Navigation" */),
    ),
  },
  CURRENCY: {
    path: `/currency`,
    component: lazy(() =>
      import('../components/Currency' /* webpackChunkName: "Navigation" */),
    ),
  },
};
export default routes;
// export default [
//   {
//     path: '/home',
//     label: 'Home',
//     exact: true,
//     component: lazy(() => import('../pages/HomePage')),
//     private: true,
//     restricted: true,
//   },
//   {
//     path: '/register',
//     label: 'Register',
//     exact: true,
//     component: lazy(() => import('../pages/Register')),
//     private: false,
//     restricted: true,
//   },
//   {
//     path: '/login',
//     label: 'Login',
//     exact: true,
//     component: lazy(() => import('../pages/Login')),
//     private: false,
//     restricted: false,
//   },
// ];
