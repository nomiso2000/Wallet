import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Currency from '../../components/Currency';
import routes from '../../routes';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="main-section">
        <h1>HomePage</h1>
        <Link to={routes.LOGIN.path}>Login</Link>
        <Link to={routes.REGISTER.path}>Register</Link>
      </section>
      <section>
        <Currency />
      </section>
    </>
  );
};

export default HomePage;
