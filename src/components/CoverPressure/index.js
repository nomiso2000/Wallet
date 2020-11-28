import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datapicker from '../Datapicket';
import {
  addTransactionOperation,
  getTransactionOperation,
} from '../../redux/transactions/operations';
import style from './coverPressure.module.css';
import selectsvg from '../../styles/css/icon/calendar.svg';
import { v4 as uuidv4 } from 'uuid';
class OverkayBlock extends Component {
  state = {
    error: null,
    income: false,
    price: '',
    category: '',
    coment: '',
    data: '',
  };

  audit = '';

  state = {
    transactionDate: '2020-11-05T08:15:30-05:00',
    type: 'EXPENSE',
    categoryId: '4498bd4f-733c-4819-ba24-6fc7dde77950',
    comment: 'SAzx',
    amount: -20,
  };

  toggle = () => this.setState(state => ({ income: !state.income }));

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onAddContact = value => {
    this.setState({ data: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    // const { price, category, data, income } = this.state;
    // if (!income) {
    //   price && data ? (this.audit = 'true') : (this.audit = 'false');
    // } else if (income) {
    //   price && data && category
    //     ? (this.audit = 'true')
    //     : (this.audit = 'false');
    // }
    // if (this.audit === 'false') {
    //   alert('не були заповнені всі поля спробуйте знову');
    //   return;
    // }

    const { transactionDate, type, categoryId, comment, amount } = this.state;

    this.props.addTransaction({
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    });
    // this.props.getTransaction();
    this.setState({ price: '', category: '', coment: '' });
  };
  // fetchImages = () => {
  //   postItem(this.state)
  //     .then(item => console.log(item))
  //     .catch(error => this.setState({ error }));
  // };

  componentDidMount() {
    {
      this.audit === 'true' && this.fetchImages();
    }
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      console.log(this.props);
      this.props.hiden();
    }
  };
  render() {
    const { price, category, coment, income } = this.state;

    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <button type="button" className={style.button_close}>
            &#10006;
          </button>
          <h2 className={style.title}>Добавить транзакцию</h2>

          {/* кнопка checkbox */}
          <div className={style.checkboxSelector}>
            <span
              className={
                income
                  ? [style.text_checkbox_darck, style.text_checkbox]
                  : [style.text_checkbox_light, style.text_checkbox]
              }
            >
              Доход
            </span>
            <label className={style.switch}>
              <input
                type="checkbox"
                checked={this.state.theme}
                onChange={this.toggle}
              />
              <span className={style.slider}></span>
            </label>
            <span
              className={
                income
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
                id="price"
                autoComplete="off"
                placeholder="0.00"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
              <Datapicker onAddContacts={this.onAddContact} />

              <span className={style.calendar_svg}>
                <img src={selectsvg} />
              </span>
            </div>

            {income && (
              <select
                className={style.contactSelect}
                id="category"
                name="category"
                value={category}
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
              id="coment"
              autoComplete="off"
              placeholder="Комментарий"
              value={coment}
              name="coment"
              onChange={this.handleChange}
            />

            <button
              type="submit"
              className={[style.contactBtnAdd, style.btn].join(' ')}
            >
              Добавить
            </button>
            <span className={[style.contactBtnDel, style.btn].join(' ')}>
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
