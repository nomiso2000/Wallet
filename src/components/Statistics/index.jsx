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

  const categoriesExpenseWithColors = categoriesExpense.map(
    // eslint-disable-next-line no-return-assign
    (category, i) => {
      const color = 'color';
      // eslint-disable-next-line no-param-reassign
      category[color] = graphColors[i];
      return { category };
    },
  );

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
  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutoutPercentage: 75,
  };

  defaults.global.legend.display = false;

  // defaults.global.legend.position = 'right';
  return (
    <div className={styles.statisticsBlock}>
      <div className={styles.doughnut}>
        <div className={styles.statHeader}>Статистика</div>
        <div className={styles.periodTotal}>
          &#x20b4; {periodTotal.toFixed(2)}
        </div>
        <Doughnut
          data={data}
          width={window.screen.width > 767 ? 320 : 280}
          height={window.screen.width > 767 ? 320 : 280}
          options={options}
        />
      </div>
      <div className={styles.stat}>
        <SelectYrsMth />
        <table className={styles.statTable}>
          <thead className={styles.theadStat}>
            <tr className={styles.trStat}>
              <th className={styles.thStat}>Категория</th>
              <th className={styles.thStat}>Сумма</th>
            </tr>
          </thead>
          <tbody className={styles.tbodyStat}>
            {categoriesExpenseWithColors.map(({ category }) => (
              <tr className={styles.trStat} key={category.name}>
                <td className={styles.tdStat}>
                  <div className={styles.nameBlock}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: category.color }}
                    />
                    <div>{category.name}</div>
                  </div>
                </td>
                <td className={styles.tdStat}>
                  {Math.abs(category.total).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className={styles.trStat}>
              <td className={styles.tdStat}>Расходы:</td>
              <td className={styles.tdStat}>
                {Math.abs(expenseSummary).toFixed(2)}
              </td>
            </tr>
            <tr className={styles.trStat}>
              <td className={styles.tdStat}>Доходы:</td>
              <td className={styles.tdStat}>{incomeSummary.toFixed(2)}</td>
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
