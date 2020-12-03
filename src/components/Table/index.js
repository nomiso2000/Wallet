import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import '../TableClass/node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styles from './Table.module.css';
import ModalWindow from '../ModalWindow/index';

import OverkayBlock from '../CoverPressure/index';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import FiltersBar from '../Filters';
import {
  deleteTransactionOperation,
  getTransactionOperation,
} from '../../redux/transactions/operations';
import { filtredTransactions } from '../../redux/transactions/selector';
import { CSSTransition } from 'react-transition-group';

const TransactionsTable = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(filtredTransactions);

  useEffect(() => {
    dispatch(getTransactionOperation());
  }, []);

  const [isShown, setShown] = useState(false);
  const [idHoveredElement, setIHE] = useState(null);
  const [renderEditWindow, setRenderEditWindow] = useState(false);

  const handleCloseEditWindow = () => {
    setRenderEditWindow(false);
  };

  const handleDeleteLetter = () => {
    let id = idHoveredElement;

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
  };

  const titleOfTable = [
    'Дата',
    'Тип',
    'Категория',
    'Комментарий',
    'Сумма',
    'Балланс',
  ];

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
                }}
                onMouseLeave={() => {
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
                  {elem.balanceAfter}{' '}
                  {isShown &&
                    idHoveredElement === elem.id &&
                    (renderEditWindow ? (
                      <OverkayBlock
                        handleCloseEditWindow={handleCloseEditWindow}
                        editedTransaction={elem}
                      />
                    ) : (
                      <ModalWindow
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
