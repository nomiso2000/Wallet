import React, { StrictMode, Suspense, useEffect } from 'react';
import { Redirect, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import ErrorNotification from '../../components/Notifications/Error';
// import Loader from '../Loader';
import routes from '../../routes/index';
import PrivateRoute from '../../HOC/PrivateRoute';

import './Navigation.css';
import Header from '../../components/Header';
import NavMenu from '../../components/NavMenu';

const Navigation = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.getLoading);
  const loading = authLoading;

  return (
    <>
      <Header />

      <div className="background">
        <div className="navMenu">
          <NavMenu />
        </div>
        <div className="Other">
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
        </div>
      </div>
    </>
  );
};
export default Navigation;
