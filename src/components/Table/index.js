import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import '../TableClass/node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styles from './Table.module.css';
import ModalWindow from '../ModalWindow/index';
// import TestWindow from '../TestWindow/index';
import OverkayBlock from '../CoverPressure/index'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  editTransaction,
  filterALL,
} from '../../redux/transactions/action';
import FiltersBar from '../Filters/FiltersBar/FiltersBar';
import {
  deleteTransactionOperation,
  editTransactionOperation,
  getTransactionOperation,
} from '../../redux/transactions/operations';
import {filtredTransactions} from '../../redux/transactions/selector'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

const TransactionsTable = () => {
  const dispatch = useDispatch();

  // const transactions = useSelector(state => state.transactions.items);
  const transactions = useSelector(state => state.transactions.items);

  useEffect(() => {
    dispatch(getTransactionOperation());
  }, []);
  console.log('transactions', transactions);
  const [isShown, setShown] = useState(false);
  const [idHoveredElement, setIHE] = useState(null);
  // const [idModalWindow, setIdModalWindov] = useState(null);
  const [renderEditWindow, setRenderEditWindow] = useState(false);

  const getEvent = isOnModalWindow => {
    // setIdModalWindov(isOnModalWindow);
    console.log('isOnModalWindow', isOnModalWindow);
    if (isOnModalWindow) {
      setShown(true);
    }
    setShown(false);
  };

  const handleCloseOfTestlWindow = () => {
    // setShown(closeBolean);
    setRenderEditWindow(false);
    console.log('renderEditWindow', renderEditWindow);
  };

   const handleDeleteLetter = () => {
    let id = idHoveredElement;

    // dispatch(deleteTransaction(id));
    dispatch(deleteTransactionOperation(id));
  };

  const handleEditLetter = () => {
    let id = idHoveredElement;
    let editedTransaction;
    transactions.filter(item => {
      if (item.id === id) {
        editedTransaction = item;
      }
    });
    setRenderEditWindow(true);
    console.log('editedTransaction', editedTransaction);
    // dispatch(editTransaction(editedTransaction));
    dispatch(editTransactionOperation(editedTransaction));
  };

  const titleOfTable = [
    'Дата',
    'Тип',
    'Категория',
    'Комментарий',
    'Сумма',
    'Балланс',
  ];
  const quantityOflatter = Array.from({ length: 10 }, (v, k) => k);
 

  return (
    <div className={styles.wrap}>
      <FiltersBar />
      {/* <CSSTransition
  in={isShown}
  timeout={1000}
  onEntered={()=>{setTimeout(()=>{setShown(isShown=false)},1000)}}
  >
  <ModalWindow />
  </CSSTransition>   */}
      <table className={styles.table}>
        <thead>
          {titleOfTable.map(title => {
            return <th key={title}>{title}</th>;
          })}
        </thead>
        <tbody>
          {transactions.map((elem, index) => {
            return (
              <tr
                key={index}
                onMouseOver={() => {
                  setShown(true);
                  setIHE(elem.id);
                  console.log('onMouseOver');
                }}
                onMouseLeave={() => {
                  console.log('onMouseLeave');

                  setShown(false);
                }}
              >
                <td key={index + 1}>{elem.transactionDate}</td>
                <td key={index + 2}>{elem.type}</td>
                <td key={index + 3}>{elem.categoryId}</td>
                <td key={index + 4}>{elem.comment}</td>
                <td key={index + 5}>{elem.amount}</td>
                              <td
                  key={index + 6}
                  className={
                    renderEditWindow
                      ? styles.hoveredLetterwindow
                      : styles.hoveredLetter
                  }
                >
                  {elem.balance}{' '}
                  {isShown &&
                    idHoveredElement === elem.id &&
                    (renderEditWindow ? (
                      <OverkayBlock
                      handleCloseOfTestlWindow={handleCloseOfTestlWindow}
                      editedTransaction={elem}
                      />
                    ) : (
                      <ModalWindow
                        getEvent={getEvent}
                        handleEditLetter={handleEditLetter}
                        handleDeleteLetter={handleDeleteLetter}
                      />
                    ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsTable;
