/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { statisticsSelectors } from '../../redux/statistics';

import SelectYrsMth from './SelectYrsMth';
import graphColors from './graphColors';

import styles from './Statistics.module.css';

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
  console.log(categoriesExpense);
  const categoriesExpenseWithColors = categoriesExpense.map(
    // eslint-disable-next-line no-return-assign
    (category, i) => {
      const color = 'color';
      // eslint-disable-next-line no-param-reassign
      category[color] = graphColors[i];
      return { category };
    },
  );
  console.log(categoriesExpenseWithColors);

  const data = {
    labels: categoriesExpenseWithColors.map(({ category }) => category.name),
    datasets: [
      {
        data: categoriesExpenseWithColors.map(({ category }) =>
          Math.abs(category.total).toFixed(2),
        ),
        backgroundColor: graphColors,
      },
    ],
  };

  defaults.global.legend.display = true;
  // defaults.options.responsive = false;
  // console.log(defaults.global.legend);
  // console.log(defaults.global);
  defaults.global.legend.position = 'right';
  return (
    <div className={styles.statisticsBlock}>
      <div>
        <div>&#x20b4; {periodTotal}</div>
        <Doughnut
          data={data}
          options={{ cutoutPercentage: 75, responsive: true }}
          className="dougnut"
        />
      </div>
      <div>
        <SelectYrsMth />
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Категория</th>
              <th className={styles.th}>Сумма</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {categoriesExpenseWithColors.map(({ category }) => (
              <tr className={styles.tr} key={category.name}>
                {/* <td
                  className={styles.color}
                  style={{ backgroundColor: category.color }}
                /> */}
                <td className="nameBlock">
                  <tr>
                    <td>
                      <div
                        className={styles.color}
                        style={{ backgroundColor: category.color }}
                      />
                    </td>
                    <td>{category.name}</td>
                  </tr>
                </td>
                <td>{Math.abs(category.total).toFixed(2)}</td>
              </tr>
            ))}
            <tr className={styles.tr}>
              <td>Расходы:</td>
              <td>{Math.abs(expenseSummary).toFixed(2)}</td>
            </tr>
            <tr className={styles.tr}>
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
