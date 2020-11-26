import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import TransactionsTable from '../../components/Table/Table.js'

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="main-section">
        <h1>HomePage</h1>
        <Link to={routes.LOGIN.path}>Login</Link>
        <Link to={routes.REGISTER.path}>Register</Link>
        <TransactionsTable/>
      </section>
    </>
  );
};

export default HomePage;
