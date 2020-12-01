import React, { useEffect, useState } from 'react';
import styles from './NavMenu.module.css';
import {
  Redirect,
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import home from '../../styles/css/icon/home.svg';
import graph from '../../styles/css/icon/graph.svg';
import usd from '../../styles/css/icon/usd.svg';
import routes from '../../routes';
import Currency from '../Currency';
import Balance from '../Balance';

function NavMenu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  console.log(windowWidth);
  console.log(location.pathname);
  return (
    <div className={styles.background}>
      <main>
        <section className={styles.main1}>
          <div className={styles.nav}>
            <div className={styles.navContainer}>
              <div className={styles.navMD}>
                <img src={home} alt="home" className={styles.navHome} />
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={routes.HOME.path}
                  activeClassName={styles.activeLink}
                  className={styles.navLink}
                >
                  {' '}
                  <p>Главная</p>
                </NavLink>
              </div>
              <div className={styles.navMD}>
                <img src={graph} alt="graph" className={styles.navGraph} />
                <NavLink
                  style={{ textDecoration: 'none' }}
                  className={styles.navLink}
                  to={routes.STATISTIC.path}
                  className={styles.link}
                  activeClassName={styles.statActiveLink}
                >
                  {' '}
                  <p>Статистика</p>
                </NavLink>
              </div>
              <div className={styles.navMD}>
                {' '}
                <NavLink
                  to={routes.CURRENCY.path}
                  className={styles.link}
                  activeClassName={styles.activeLin}
                >
                  <img src={usd} alt="usd" className={styles.navUsd} />
                </NavLink>
              </div>
              <div className={styles.balanceContainer}>
                {windowWidth < 768 ? (
                  location.pathname === '/statistic' ||
                  location.pathname === '/currency' ? null : (
                    <Balance className={styles.balance} />
                  )
                ) : (
                  <Balance className={styles.balance} />
                )}

                {windowWidth > 768 && <Currency />}
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.main2}></section> */}
      </main>
    </div>
  );
}

export default NavMenu;
