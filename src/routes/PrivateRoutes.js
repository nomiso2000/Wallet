import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '.';

const PrivateRoute = ({
  component: Component,
  isAuthentificated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      console.log(isAuthentificated);
      console.log(routeProps);
      return isAuthentificated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthentificated: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
