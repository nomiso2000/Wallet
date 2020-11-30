import React, { StrictMode, Suspense, useEffect } from 'react';
import { Redirect, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import ErrorNotification from '../../components/Notifications/Error';
// import Loader from '../Loader';
import routes from '../../routes/index';
import PrivateRoute from '../../HOC/PrivateRoute';
import Currency from '../../components/Currency';
import Balance from '../../components/Balance';

const Navigation = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.getLoading);
  const loading = authLoading;

  return (
    <>
      <h1>HEADER</h1>
      <NavLink to={routes.HOME.path}>HOME</NavLink>
      <NavLink to={routes.STATISTIC.path}>STATICTIC</NavLink>
      <Balance />
      <Currency />
      <StrictMode>
        <Suspense fallback="loading">
          <Switch>
            <PrivateRoute
              path={routes.HOME.path}
              component={routes.HOME.component}
            />
            <PrivateRoute
              path={routes.STATISTIC.path}
              component={routes.STATISTIC.component}
            />

            <Redirect to={routes.HOME.path} />
          </Switch>
          {loading && 'loading'}
          <ErrorNotification />
        </Suspense>
      </StrictMode>
    </>
  );
};
export default Navigation;
