import React, { Component } from 'react';
import moment from 'moment-with-locales-es6';
import { connect } from 'react-redux';

import {
  statisticsSelectors,
  statisticsOperations,
} from '../../redux/statistics';

// TEST TABLES
import { allTransactions } from './testSummary';

moment.locale('ru');

class SelectYrsMth extends Component {
  state = {
    valueMonth: 0,
    valueYear: 0,
    monthsInRequestedYear: [],
    arrayOfDates: [],
  };

  componentDidMount() {
    // TRY THIS
    // const {assembledArrayOfYrsMths} = this.props;

    //    COMMENT FRAGMENT FROM HERE
    const { finalYMArrayMethod, transactionsYearsMonths } = this;

    const assembledArrayOfYrsMths = finalYMArrayMethod(
      transactionsYearsMonths(allTransactions),
    );

    //    COMMENT FRAGMENT TO HERE
    // console.log(assembledArrayOfYrsMths);
    this.setState({ arrayOfDates: assembledArrayOfYrsMths });
  }
  //    COMMENT FRAGMENT FROM HERE

  transactionsYearsMonths = array =>
    array
      .filter(({ type }) => type === 'EXPENSE')
      .map(({ transactionDate }) => {
        const year = moment(transactionDate, 'YYYY MM D').format('YYYY');
        const month = moment(transactionDate, 'YYYY MM D').format('MM');
        return { year, month: [month] };
      })
      .sort((a, b) => a.year - b.year);

  finalYMArrayMethod = array => {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = i + 1; j < array.length; j += 1) {
        if (
          array[i].year === array[j].year &&
          array[i].month !== array[j].month
        ) {
          // eslint-disable-next-line no-unused-expressions
          array[j].year;

          // eslint-disable-next-line no-param-reassign
          array[i].month = [
            ...new Set([...array[i].month, ...array[j].month]),
          ].sort();

          array.splice(j, 1);
          j = i;
        }
      }
    }

    return array;
  };

  //    COMMENT FRAGMENT TO HERE
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const { arrayOfDates, valueMonth, valueYear } = this.state;
    if (name === 'valueYear') {
      const requestedYear = arrayOfDates.find(({ year }) => year === value);
      //   console.log(requestedYear.month);
      this.setState({ monthsInRequestedYear: requestedYear.month });
    }
    this.setState({ [name]: Number(value) });
    // if (valueMonth !== 0 && valueYear !== 0) {
    //   this.props.onFetchSummaryTransactions(valueYear, valueMonth);
    // }
  };

  render() {
    const {
      valueMonth,
      valueYear,
      arrayOfDates,
      monthsInRequestedYear,
    } = this.state;

    return (
      <div>
          {/* NOT READY YET */}
        <select
          name="valueMonth"
          value={valueMonth}
          onChange={this.handleChange}
        >
          <option value="Месяц">Месяц</option>
          {monthsInRequestedYear &&
            monthsInRequestedYear.map(month => (
              <option key={month} value={month}>
                {moment(month, 'MM').format('MMMM')}
              </option>
            ))}
        </select>
        <select name="valueYear" value={valueYear} onChange={this.handleChange}>
          <option value="Год">Год</option>
          {arrayOfDates.map(({ year }) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

// export default connect(
//   state => ({
//     assembledArrayOfYrsMths: statisticsSelectors.getAssembledArrayOfYrsMths(
//       state,
//     ),
//   }),
//   {
//     onFetchSummaryTransactions: statisticsOperations.fetchTransactionsSummary,
//   },
// )(SelectYrsMth);

export default SelectYrsMth;
