import React from 'react';
import styles from './Balance.module.css';

const Balance = () => {
  return (
    <div className={styles.div}>
      <p className={styles.balanceText}>ВАШ БАЛАНС</p>
      <span className={styles.sign}>$</span>{' '}
      <p className={styles.balanceValue}>10 0000.00</p>
    </div>
  );
};

export default Balance;
