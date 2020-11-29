import React, { Component } from 'react';

import styles from './TableClass.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';

import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  editTransaction,
} from '../../redux/transactions/action';
import { getTransaction } from '../../redux/transactions/selector';
import {
  deleteTransactionOperation,
  editTransactionOperation,
} from '../../redux/transactions/operations';
import FiltersBar from '../Filters/FiltersBar/FiltersBar';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

class TransactionsTableClass extends Component {
  state = {
    isShown: false,
    idHoveredElement: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('prevProps', nextProps);
    console.log('prevState', nextState);
    console.log(
      'pnextState.idHoveredElement===this.state.idHoveredElement',
      nextState.idHoveredElement === this.state.idHoveredElement,
    );
    if (nextState.idHoveredElement === this.state.idHoveredElement) {
      return false
    } else {return true}
  }
  // const [idModalWindow, setIdModalWindov] = useState(null);

  getEvent = isOnModalWindow => {
    // setIdModalWindov(isOnModalWindow);
    console.log('isOnModalWindow', isOnModalWindow);
    if (isOnModalWindow) {
      this.setState({ isShown: true });
    }
    this.setState({ isShown: false });
  };

  // const handleCloseModalWindow = closBolean => {
  //   setShown(closBolean);
  // };

  handleDeleteLetter = () => {
    let id = this.state.idHoveredElement;

    this.props.deleteTransaction(id);
    this.props.deleteTransactionOperation(id);
  };

  handleEditLetter = () => {
    let id = this.state.idHoveredElement;
    let editedTransaction;
    this.props.transactions.filter(item => {
      if (item.id === id) {
        editedTransaction = item;
      }
    });
    console.log('editedTransaction', editedTransaction);
    this.props.editTransaction(editedTransaction);
    this.props.editTransactionOperation(id);
  };

  titleOfTable = [
    'Дата',
    'Тип',
    'Категория',
    'Комментарий',
    'Сумма',
    'Балланс',
  ];
  quantityOflatter = Array.from({ length: 10 }, (v, k) => k);

  render() {
    const { isShown, idHoveredElement } = this.state;
    console.log('Table render');
    console.log(this.props);
    console.log(this.state);
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
            {this.titleOfTable.map(title => {
              return <th>{title}</th>;
            })}
          </thead>
          <tbody
          // onMouseOut={setTimeout(()=>{setShown(false)},500) }
          >
            {this.props.transactions.map((elem, index) => {
              return (
                <div className={styles.hoveredLetter}>
                  <tr
                    key={index}
                    onMouseOver={() => {
                      this.setState({
                        isShown: true,
                        idHoveredElement: elem.id,
                      }),
                        console.log('onMouseOver');
                    }}
                    // onMouseOut={(event) =>{console.log(event.currentTarget); if (isShown===true){return} setShown(false)}}
                    onMouseLeave={() => {
                      console.log('onMouseLeave');
                      // console.log('idModalWindov', idModalWindow);
                      // if (idModalWindow === 'ModalWindowId') {
                      //   return;
                      // }
                      setTimeout(() => {
                        this.setState({ isShown: false });
                      }, 500);
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
                          getEvent={this.getEvent}
                          // handleCloseModalWindow={handleCloseModalWindow}
                          handleEditLetter={this.handleEditLetter}
                          handleDeleteLetter={this.handleDeleteLetter}
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
  }
}
const mapStateToProps = state => {
  return { transactions: getTransaction(state) };
};
const mapDispatchToProps = {
  deleteTransaction,
  editTransaction,
  deleteTransactionOperation,
  editTransactionOperation,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsTableClass);
