/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { statisticsSelectors } from '../../redux/statistics';

import SelectYrsMth from './SelectYrsMth';
import graphColors from './graphColors';

// TEST TABLES

import { testSummary } from './testSummary';

const Statistics = () => {
  const {
    categoriesSummary,
    incomeSummary,
    expenseSummary,
    periodTotal,
  } = testSummary;
  // = this.props;
  // eslint-disable-next-line react/prop-types
  const categoriesExpense = categoriesSummary.filter(
    ({ type }) => type === 'EXPENSE',
  );

  const data = {
    labels: categoriesExpense.map(({ name }) => name),
    datasets: [
      {
        data: categoriesExpense.map(({ total }) => Math.abs(total).toFixed(2)),
        backgroundColor: graphColors,
      },
    ],
  };
  defaults.global.legend.display = false;
  // defaults.global.legend.position = 'right';
  return (
    <div>
      <div>
        <SelectYrsMth />
      </div>
      <div>
        <div>&#x20b4; {periodTotal}</div>
        <Doughnut data={data} options={{ cutoutPercentage: 75 }} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Категория</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {categoriesExpense.map(({ total, name }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{Math.abs(total).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td>Расходы:</td>
              <td>{Math.abs(expenseSummary).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Доходы:</td>
              <td>{incomeSummary.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export default connect(state => ({
//   categoriesSummary: statisticsSelectors.getAllStatistics(state),
//   incomeSummary: statisticsSelectors.getIncomeSummary(state),
//   expenseSummary: statisticsSelectors.getExpenseSummary(state),
//   periodTotal: statisticsSelectors.getPeriodTotal(state),
// }))(Statistics);

export default Statistics;
