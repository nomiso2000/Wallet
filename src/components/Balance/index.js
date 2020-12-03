import React, { useEffect } from 'react';
import styles from './Balance.module.css';

const Balance = () => {
  useEffect(() => {
    console.log('USE EFFECT');
  }, []);
  return (
    <div className={styles.div}>
      <p className={styles.balanceText}>ВАШ БАЛАНС</p>
      <span className={styles.sign}>$</span>{' '}
      <p className={styles.balanceValue}>10 0000.00</p>
    </div>
  );
};

export default Balance;
