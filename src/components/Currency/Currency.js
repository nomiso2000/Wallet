import React, { Component } from 'react';
import CurrencyAPI from './CurrencyAPI';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class Currency extends Component {
  state = {
    currency: [],
  };
  componentDidMount = () => {
    CurrencyAPI.getCurrencyValue().then(currencyItems =>
      this.setState({ currency: currencyItems }),
    );
  };
  render() {
    const arrayOfCurrency = this.state.currency.filter(
      item => item.ccy !== 'BTC',
    );
    return (
      <table>
        <tbody>
          <tr>
            <th>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
          {arrayOfCurrency.map(itemOfCurrency => (
            <tr key={uuidv4()}>
              <td>{itemOfCurrency.ccy}</td>
              <td>{parseFloat(itemOfCurrency.buy).toFixed(2)}</td>
              <td>{parseFloat(itemOfCurrency.sale).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Currency;
