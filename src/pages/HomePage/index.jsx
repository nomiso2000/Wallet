import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OverkayBlock from '../../components/CoverPressure';
import Currency from '../../components/Currency';
import HomeTab from '../../components/HomeTab';
import TransactionsTable from '../../components/Table';
import routes from '../../routes';

const HomePage = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);

  const handleHide = () => {
    setToggleModal(false);
  };
  const show = () => {
    console.log(toggleModal);
    setToggleModal(true);
  };
  return (
    <>
      <section className="main-section">
        <h1>HomePage</h1>
        <Link to={routes.LOGIN.path}>Login</Link>
        <Link to={routes.REGISTER.path}>Register</Link>
        <TransactionsTable />
      </section>
      <section>
        <Currency />
        <button onClick={show}>CLICK</button>
        {toggleModal && <OverkayBlock hiden={handleHide} />}
        {/* <HomeTab /> */}
      </section>
    </>
  );
};

export default HomePage;
