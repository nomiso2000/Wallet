import { lazy } from 'react';

const routes = {
  HOME: {
    path: `/home`,
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
    private: true,
  },

  LOGIN: {
    path: `/login`,
    component: lazy(() =>
      import('../pages/Login' /* webpackChunkName: "Login" */),
    ),
    private: false,
  },

  REGISTER: {
    path: `/register`,
    component: lazy(() =>
      import('../pages/Register' /* webpackChunkName: "Register" */),
    ),
    private: false,
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
