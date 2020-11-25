import React, { Component } from 'react';
import './coverPressure.css';
import Datapicker from '../Datapicket/Datapicket';

class OverkayBlock extends Component {
  state = {
    income: false,
    price: '',
    category: '',
    coment: '',
    data: '',
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

    // const { price, category, coment, data } = this.state;
    // { (price &&  calendar && category && data ) ?    //   this.props.onAddContact({ price, category, coment, data });
    // this.setState({ price: '', category: '', coment: '' }) :  alert("One of the fields was not filled!")}

    const { price, category, coment, data, income } = this.state;
    {
      price && data
        ? alert('заповнені всі поля')
        : alert('One of the fields was not filled!');
    }
    this.setState({ price: '', category: '', coment: '' });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  // handleKeydown = (e) => {
  //   if (e.code === "Escape" || e.target === e.currentTarget) {
  //     this.props.toggleClose();
  //   }
  // };
  render() {
    const { price, category, coment, income } = this.state;
    return (
      <div className="overlay">
        <div className="modal">
          <button type="button" className="button_close">
            &#10006;
          </button>
          <h2 className="title">Добавить транзакцию</h2>

          {/* кнопка checkbox */}
          <div className="checkboxSelector">
            <span
              className={
                income
                  ? 'text_checkbox_darck text_checkbox'
                  : 'text_checkbox_light text_checkbox'
              }
            >
              Доход
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.theme}
                onChange={this.toggle}
              />
              <span className="slider"></span>
            </label>
            <span
              className={
                income
                  ? 'text_checkbox_red text_checkbox'
                  : 'text_checkbox_darcks text_checkbox'
              }
            >
              Росход
            </span>
          </div>

          <form className="contactForm" onSubmit={this.handleFormSubmit}>
            <div>
              <input
                className="contactFormItem contactFormItemPrice"
                type="text"
                id="price"
                autoComplete="off"
                placeholder="0.00"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
              <Datapicker onAddContacts={this.onAddContact} />

              <span className="calendar_svg">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z"
                    fill="#4A56E2"
                  />
                </svg>
              </span>
            </div>

            {income && (
              <select
                className="contactSelect"
                id="category"
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                <option value="" disabled selected hidden>
                  Выберите категорию
                </option>
                <option className="SelectItem" value="main">
                  Основной
                </option>
                <option className="SelectItem" value="auto">
                  Авто
                </option>
                <option className="SelectItem" value="development">
                  Развитие
                </option>
                <option className="SelectItem" value="сhildren">
                  Дети
                </option>
                <option className="SelectItem" value="house">
                  Дом
                </option>
                <option className="SelectItem" value="education">
                  Образование
                </option>
                <option className="SelectItem" value="rest">
                  Остальные
                </option>
              </select>
            )}

            <input
              className="contactFormItem contactFormItemComent"
              type="text"
              id="coment"
              autoComplete="off"
              placeholder="Комментарий"
              value={coment}
              name="coment"
              onChange={this.handleChange}
            />

            <button type="submit" className="contactBtnAdd btn">
              Добавить
            </button>
            <span className="contactBtnDel btn">Отменить</span>
          </form>
        </div>
      </div>
    );
  }
}

export default OverkayBlock;

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
