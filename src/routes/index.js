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
};
export default routes;
