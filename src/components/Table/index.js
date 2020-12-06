import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../../../node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
  getTransactionCategoriesOperation,
} from '../../redux/transactions/operations';
import { filtredTransactions } from '../../redux/transactions/selector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ContactSupportOutlined } from '@material-ui/icons';

const TransactionsTable = () => {
  const dispatch = useDispatch();

  const [toggleModal, setToggleModal] = useState(false);

  const handleHide = () => {
    setToggleModal(!toggleModal);
  };
  const show = () => {
    console.log(toggleModal);
    setToggleModal(true);
  };

  const transactions = useSelector(filtredTransactions);
  const [isShown, setShown] = useState(false);
  const [idHoveredElement, setIHE] = useState(null);
  const [renderEditWindow, setRenderEditWindow] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    dispatch(getTransactionOperation());
    async function сategoriesArray() {
      const response = await dispatch(getTransactionCategoriesOperation());
      setCategories(response);
    }
    сategoriesArray();
  }, []);

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

  const nameByCategoryId = categoryId => {
    let nameOfCategory;
    categories.find(elem => {
      if (categoryId === elem.id) {
        nameOfCategory = elem.name;
        if (nameOfCategory === 'test income') {
          nameOfCategory = 'Доход';
        }
      }
    });
    return nameOfCategory;
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
      <Table key={1} className={styles.table}>
        <Thead className={styles.thead} >
          <Tr >
          {titleOfTable.map(title => {
            return <Th key={title} className={styles.thIsideThead}>{title}</Th>;
          })}
          </Tr>
        </Thead>
        <TransitionGroup component="Tbody">
                  {transactions.map((elem, index) => {
            return (
              <CSSTransition timeout={250} classNames={styles} key={elem.id}>
                <Tr
                  key={index}
                  onMouseOver={() => {
                    setShown(true);
                    setIHE(elem.id);
                  }}
                  onMouseLeave={() => {
                    isShown &&
                      idHoveredElement === elem.id &&
                      (!renderEditWindow && setShown(false));
                  }}
                >
                  <Td key={index + 1}>{elem.transactionDate}</Td>
                  <Td key={index + 2}>{elem.type === 'EXPENSE' ? '-' : '+'}</Td>
                  <Td key={index + 3}>{nameByCategoryId(elem.categoryId)}</Td>
                  <Td key={index + 4}>{elem.comment}</Td>
                  <Td key={index + 5}>{elem.amount}</Td>
                  <Td
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
                          categories={categories}
                        />
                      ) : (
                        <ModalWindow
                          handleEditLetter={handleEditLetter}
                          handleDeleteLetter={handleDeleteLetter}
                        />
                      ))}
                  </Td>
                </Tr>
               </CSSTransition>
            );
          })}
        </TransitionGroup>
        {/* </Tbody> */}
      </Table>

      <button onClick={show} className={styles.stickyButton}></button>
      {toggleModal && (
        <OverkayBlock hiden={handleHide} categories={categories} />
      )}
    </div>
  );
};
export default TransactionsTable;
