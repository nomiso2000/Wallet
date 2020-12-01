import { StylesProvider } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Balance from '../../components/Balance';
import OverkayBlock from '../../components/CoverPressure';
import Currency from '../../components/Currency';
import HomeTab from '../../components/HomeTab';
import TransactionsTable from '../../components/Table';
import UserMenu from '../../components/UserMenu';
import routes from '../../routes';
import Navigation from '../Navigation';
import styles from './HomePage.module.css';
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
      <div className={styles.background}>
        <section className={styles.mainSection}>
          <div className={styles.containerHome}>
            <h1>HomePage</h1>
            {/* <TransactionsTable /> */}
            <button onClick={show}>CLICK</button>
            {toggleModal && <OverkayBlock hiden={handleHide} />}
            {/* <HomeTab /> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
