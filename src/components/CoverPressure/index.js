import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Datapicker from '../Datapicket';
import {
  addTransactionOperation,
  getTransactionOperation,
  getTransactionCategoriesOperation,
  editTransactionOperation,
} from '../../redux/transactions/operations';
import style from './coverPressure.module.css';
import selectsvg from '../../styles/css/icon/calendar.svg';

class OverkayBlock extends Component {
  state = {
    array: [],
    transactionDate: '',
    type: 'INCOME',
    // categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    categoryId: '',
    comment: '',
    amount: '',
    id: '',
  };

  incomeCategoryId = () => {
    let incomeCategoryId;
    this.props.categories.find(elem => {
      if (elem.type === 'INCOME' && elem.name === 'test income') {
        incomeCategoryId = elem.id;
      }
    });

    return incomeCategoryId;
  };

  audit = '';

  toggleType = () => {
    return this.state.type === 'INCOME'
      ? this.setState({
          type: 'EXPENSE',
          categoryId: 'a6385df4-6696-4e73-89ce-2c52bda02a39',
        })
      : this.setState({
          type: 'INCOME',
          categoryId: this.incomeCategoryId(),
        });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onAddContact = value => {
    this.setState({ transactionDate: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
      id,
    } = this.state;

    if (type == 'INCOME') {
      amount && transactionDate
        ? (this.audit = 'true')
        : (this.audit = 'false');
    } else if (type == 'EXPENSE') {
      amount && transactionDate && categoryId
        ? (this.audit = 'true')
        : (this.audit = 'false');
    }
    if (this.audit === 'false') {
      alert('Не були заповнені всі поля, спробуйте знову');
      return;
    }
    let amoundNumb = Number(amount);
    if (this.audit === 'true') {
      if (this.props.hiden) {
        this.props.addTransaction({
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
        });
      } else {
        this.props.editTransaction({
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
          id,
        });
      }
      if (this.props.hiden) {
        this.props.hiden();
      } else {
        this.props.handleCloseEditWindow();
      }
    }
    this.setState({
      transactionDate: '',
      type: 'INCOME',
      categoryId: this.incomeCategoryId(),
      comment: '',
      amount: '',
    });
  };
  async componentDidMount() {
    // await axios
    //   .get(
    //     `https://sheltered-sea-54747.herokuapp.com/api/transaction-categories`,
    //   )
    //   .then(({ data }) => this.setState({ array: [...data] }));
    // console.log('arr', this.state.array);
    this.setState({
      array: [...this.props.categories],
      categoryId: this.incomeCategoryId(),
    });

    let { transactionDate, type, categoryId, comment, amount, id } = this.state;
    if (!this.props.hiden) {
      transactionDate = this.props.editedTransaction.transactionDate;
      type = this.props.editedTransaction.type;
      categoryId = this.props.editedTransaction.categoryId;
      comment = this.props.editedTransaction.comment;
      amount = this.props.editedTransaction.amount;
      id = this.props.editedTransaction.id;
      this.setState({ transactionDate, type, categoryId, comment, amount, id });
    }

    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      if (this.props.hiden) {
        this.props.hiden();
      } else {
        this.props.handleCloseEditWindow();
      }
    }
  };
  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    const {
      array,
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    } = this.state;
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <button
            onClick={this.handleKeydown}
            type="button"
            className={style.button_close}
          >
            &#10006;
          </button>
          <h2 className={style.title}>
            {' '}
            {this.props.hiden ? 'Добавить транзакцию' : 'Изменить транзакцию'}
          </h2>

          {/* кнопка checkbox */}
          <div className={style.checkboxSelector}>
            <span
              className={
                type === 'EXPENSE'
                  ? [style.text_checkbox_darck, style.text_checkbox].join(' ')
                  : [style.text_checkbox_light, style.text_checkbox].join(' ')
              }
            >
              Доход
            </span>
            <label onChange={this.toggleType} className={style.switch}>
              <input
                type="checkbox"
                checked={this.state.type === 'EXPENSE' ? true : false}
              />
              <span className={style.slider}></span>
            </label>
            <span
              className={
                type === 'EXPENSE'
                  ? [style.text_checkbox_red, style.text_checkbox].join(' ')
                  : [style.text_checkbox_darcks, style.text_checkbox].join(' ')
              }
            >
              Росход
            </span>
          </div>

          <form className={style.contactForm} onSubmit={this.handleFormSubmit}>
            <div>
              <input
                className={[
                  style.contactFormItem,
                  style.contactFormItemPrice,
                ].join(' ')}
                type="text"
                id="amount"
                autoComplete="off"
                placeholder="0.00"
                name="amount"
                value={amount}
                onChange={this.handleChange}
              />
              <Datapicker onAddContacts={this.onAddContact} />

              <span className={style.calendar_svg}>
                <img src={selectsvg} />
              </span>
            </div>

            {type === 'EXPENSE' && (
              <select
                className={style.contactSelect}
                id="categoryId"
                name="categoryId"
                value={categoryId}
                onChange={this.handleChange}
              >
                <option value="" disabled selected hidden>
                  Выберите категорию
                </option>

                {this.props.categories.map((elem, index) => {
                  if (elem.type === 'EXPENSE' && elem.name !== 'test expense')
                    return (
                      <option
                        // onClick={this.setState({categoryId:''})}
                        className={style.SelectItem}
                        name={elem.name}
                        value={elem.id}
                        key={elem.name}
                      >
                        {elem.name}
                      </option>
                    );
                })}
              </select>
            )}

            <input
              className={[
                style.contactFormItem,
                style.contactFormItemComent,
              ].join(' ')}
              type="text"
              id="comment"
              autoComplete="off"
              placeholder="Комментарий"
              value={comment}
              name="comment"
              onChange={this.handleChange}
            />

            <button
              type="submit"
              className={[style.contactBtnAdd, style.btn].join(' ')}
            >
              {this.props.hiden ? 'Добавить' : 'Изменить'}
            </button>
            <span
              className={[style.contactBtnDel, style.btn].join(' ')}
              onClick={() => this.handleKeydown}
            >
              Отменить
            </span>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTransaction: addTransactionOperation,
  getTransaction: getTransactionOperation,
  getCategories: getTransactionCategoriesOperation,
  editTransaction: editTransactionOperation,
};
export default connect(null, mapDispatchToProps)(OverkayBlock);
