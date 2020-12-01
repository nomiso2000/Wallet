import React from 'react';
import styles from './NavMenu.module.css';

import home from '../../styles/css/icon/home.svg';
import graph from '../../styles/css/icon/graph.svg';
import usd from '../../styles/css/icon/usd.svg';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Currency from '../Currency';
import Balance from '../Balance';

function NavMenu() {
  return (
    <div className={styles.background}>
      <main>
        <section className={styles.main1}>
          <div className={styles.nav}>
            <div className={styles.navContainer}>
              <div className={styles.navMD}>
                <img src={home} alt="home" className={styles.navHome} />
                <NavLink to={routes.HOME.path}>
                  {' '}
                  <p>Главная</p>
                </NavLink>
              </div>
              <div className={styles.navMD}>
                <img src={graph} alt="graph" className={styles.navGraph} />
                <NavLink to={routes.STATISTIC.path}>
                  {' '}
                  <p>Статистика</p>
                </NavLink>
              </div>

              <img src={usd} alt="usd" className={styles.navUsd} />
            </div>

            <Balance />
            <Currency />
          </div>
        </section>
        {/* <section className={styles.main2}></section> */}
      </main>
    </div>
  );
}

export default NavMenu;
