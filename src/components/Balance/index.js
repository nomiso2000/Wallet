import React, { useEffect } from 'react';
import styles from './Balance.module.css';
import { connect } from 'react-redux';
import { getTransaction } from '../../redux/transactions/selector';

const Balance = balance => {
  useEffect(() => {
    console.log('USE EFFECT');
  }, []);

  const totalBalance = balance.balanceAfter;
  return (
    <div className={styles.div}>
      <p className={styles.balanceText}>ВАШ БАЛАНС</p>
      <span className={styles.sign}>$</span>{' '}
      <p className={styles.balanceValue}>
        {parseFloat(totalBalance).toFixed(2)}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  const balance = state.transactions.items[state.transactions.items.length - 1];
  return balance;
};

export default connect(mapStateToProps, null)(Balance);
