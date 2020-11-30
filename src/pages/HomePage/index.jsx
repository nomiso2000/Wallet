import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Balance from '../../components/Balance';
import OverkayBlock from '../../components/CoverPressure';
import Currency from '../../components/Currency';
import Balance from '../../components/Balance/Balance';
import HomeTab from '../../components/HomeTab';
import TransactionsTable from '../../components/Table';
import UserMenu from '../../components/UserMenu';
import routes from '../../routes';
import Navigation from '../Navigation';
const HomePage = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);
  const isAuthentificated = useSelector(state => state.auth.token);
  const handleHide = () => {
    setToggleModal(!toggleModal);
  };
  const show = () => {
    console.log(toggleModal);
    setToggleModal(true);
  };
  return (
    <>
      {/* <Navigation /> */}
      <section className="main-section">
        <h1>HomePage</h1>
        <UserMenu />
        <TransactionsTable />
      </section>
      <section>
<<<<<<< HEAD
        <Balance />
        <Currency />
=======
>>>>>>> dev
        <button onClick={show}>CLICK</button>
        {toggleModal && <OverkayBlock hiden={handleHide} />}
        {/* <HomeTab /> */}
      </section>
    </>
  );
};

export default HomePage;
