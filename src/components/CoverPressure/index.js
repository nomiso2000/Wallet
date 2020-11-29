import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datapicker from '../Datapicket';
import {
  addTransactionOperation,
  getTransactionOperation,
  transactionCategories,
} from '../../redux/transactions/operations';
import style from './coverPressure.module.css';
import selectsvg from '../../styles/css/icon/calendar.svg';
// import { v4 as uuidv4 } from 'uuid';
class OverkayBlock extends Component {
  // state = {
  //   error: null,
  //   income: false,
  //   price: '',
  //   category: '',
  //   coment: '',
  //   data: '',
  // };

  state = {
    array: [],
    transactionDate: '2020-11-05T08:15:30-05:00',
    type: 'INCOME',
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    comment: '',
    amount: '',
  };
  audit = '';

  // toggle = () => this.setState(state => ({ income: !state.income }));

  toggleType = () => {
    return this.state.type === 'INCOME'
      ? this.setState({ type: 'COST' })
      : this.setState({ type: 'INCOME' });
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
    const { transactionDate, type, categoryId, comment, amount } = this.state;
    if (type == 'INCOME') {
      amount && transactionDate
        ? (this.audit = 'true')
        : (this.audit = 'false');
    } else if (type == 'COST') {
      amount && transactionDate && categoryId
        ? (this.audit = 'true')
        : (this.audit = 'false');
    }
    if (this.audit === 'false') {
      alert('Не були заповнені всі поля, спробуйте знову');
      return;
    }
    this.props.addTransaction({
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    });

    this.setState({
      transactionDate: '',
      type: '',
      categoryId: '',
      comment: '',
      amount: '',
    });
  };

  componentDidMount() {
    this.props.getCategories();
    // {
    //   this.audit === 'true' && this.fetchImages();
    // }
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.hiden();
    }
  };

  render() {
    const { transactionDate, type, categoryId, comment, amount } = this.state;

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
          <h2 className={style.title}>Добавить транзакцию</h2>

          {/* кнопка checkbox */}
          <div className={style.checkboxSelector}>
            <span
              className={
                type === 'COST'
                  ? [style.text_checkbox_darck, style.text_checkbox].join(' ')
                  : [style.text_checkbox_light, style.text_checkbox].join(' ')
              }
            >
              Доход
            </span>
            <label onChange={this.toggleType} className={style.switch}>
              <input type="checkbox" checked={this.state.theme} />
              <span className={style.slider}></span>
            </label>
            <span
              className={
                type === 'COST'
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

            {type === 'COST' && (
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
                <option className={style.SelectItem} value="main">
                  Основной
                </option>
                <option className={style.SelectItem} value="auto">
                  Авто
                </option>
                <option className={style.SelectItem} value="development">
                  Развитие
                </option>
                <option className={style.SelectItem} value="сhildren">
                  Дети
                </option>
                <option className={style.SelectItem} value="house">
                  Дом
                </option>
                <option className={style.SelectItem} value="education">
                  Образование
                </option>
                <option className={style.SelectItem} value="rest">
                  Остальные
                </option>
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
              Добавить
            </button>
            <span
              className={[style.contactBtnDel, style.btn].join(' ')}
              onClick={this.handleKeydown}
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
  getCategories: transactionCategories,
};
export default connect(null, mapDispatchToProps)(OverkayBlock);

// class Section extends React.Component {
//   state = {
//     theme: true
//   };

//   toggleTheme = () => this.setState((prev) => ({ theme: !prev.theme }));

//   render() {
//     return (
//       <section
//         className={this.state.theme === true ?.light :.dark}
//       >
//
//         {this.props.children}
//       </section>
//     );
//   }
// }

// Section.propTypes = {
//   children: PropTypes.node.isRequired
// };
// export default Section;
