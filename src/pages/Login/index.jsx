import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import withAuth from '../../HOC/withAuth';
import routes from '../../routes';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <section className="form-section">
      <h1>Login</h1>
    </section>
  );
};

export default withAuth(Login);
