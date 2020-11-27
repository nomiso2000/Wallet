import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styles from './Table.module.css';
import ModalWindow from '../ModalWindow';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTransaction,
  editTransaction,
} from '../../redux/transactions/action';
import {
  deleteTransactionOperation,
  editTransactionOperation,
} from '../../redux/transactions/operations';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

const TransactionsTable = () => {
  const transactions = useSelector(state => state.transactions.items);
  const dispatch = useDispatch();
  const [isShown, setShown] = useState(false);
  const [idHoveredElement, setIHE] = useState(null);
  const [idModalWindow, setIdModalWindov] = useState(null);

  // const getEvent = isOnModalWindow => {
  //   // setIdModalWindov(isOnModalWindow);
  //   console.log('isOnModalWindow', isOnModalWindow);
  //   return isOnModalWindow;
  // };

  // const handleCloseModalWindow = closBolean => {
  //   setShown(closBolean);
  // };

  const handleDeleteLetter = () => {
    let id = idHoveredElement;

    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionOperation(id));
  };

  const handleEditLetter = () => {
    let id = idHoveredElement;
    const editedTransaction = transactions.filter(item => item.id === id);
    console.log('editedTransaction', editedTransaction);
    dispatch(editTransaction(editedTransaction));
    dispatch(editTransactionOperation(id));
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
      {/* <CSSTransition
  in={isShown}
  timeout={1000}
  onEntered={()=>{setTimeout(()=>{setShown(isShown=false)},1000)}}
  >
  <ModalWindow />
  </CSSTransition>   */}
      <table border="1" className={styles.table}>
        <thead>
          {titleOfTable.map(title => {
            return <th>{title}</th>;
          })}
        </thead>
        <tbody
        // onMouseOut={setTimeout(()=>{setShown(false)},500) }
        >
          {transactions &&
            transactions.map((elem, index) => {
              return (
                <div className={styles.hoveredLetter}>
                  <tr
                    //   className={styles.hoveredLetter}
                    key={index}
                    onMouseOver={() => {
                      setShown(true);
                      setIHE(elem.id);
                    }}
                    // onMouseOut={(event) =>{console.log(event.currentTarget); if (isShown===true){return} setShown(false)}}
                    onMouseOut={() => {
                      console.log('idModalWindov', idModalWindow);
                      if (idModalWindow === 'ModalWindowId') {
                        return;
                      }
                      // setTimeout(() => {
                      //   setShown(false);
                      // }, 500);
                      //  setShown(false)
                    }}
                  >
                    <td key={index + 1}>{elem.avatar}</td>
                    <td key={index + 2}>
                      {elem.name}
                      {uuidv4()}
                    </td>
                    <td key={index + 3}>{elem.id}</td>
                    <td key={index + 4}>
                      {elem.isOnline}{' '}
                      {isShown && idHoveredElement === elem.id && (
                        <ModalWindow
                          // getEvent={getEvent}
                          // handleCloseModalWindow={handleCloseModalWindow}
                          handleEditLetter={handleEditLetter}
                          handleDeleteLetter={handleDeleteLetter}
                        />
                      )}
                    </td>
                  </tr>
                </div>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsTable;
