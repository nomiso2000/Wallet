const testSummary = {
  categoriesSummary: [
    {
      name: 'Основные расходы',
      type: 'EXPENSE',
      total: -1500,
    },
    {
      name: 'Продукты',
      type: 'EXPENSE',
      total: -1500,
    },
    {
      name: 'Машина',
      type: 'EXPENSE',
      total: -500,
    },
    {
      name: 'test 4',
      type: 'INCOME',
      total: 1500,
    },
    {
      name: 'Забота о себе',
      type: 'EXPENSE',
      total: -1500,
    },
    {
      name: 'Забота о детях',
      type: 'EXPENSE',
      total: -1000,
    },
    {
      name: 'Товары для дома',
      type: 'EXPENSE',
      total: -1500,
    },
    {
      name: 'Образование',
      type: 'EXPENSE',
      total: -700,
    },
    {
      name: 'Досуг',
      type: 'EXPENSE',
      total: -1100,
    },
    {
      name: 'Другие расходы',
      type: 'EXPENSE',
      total: -500,
    },
  ],
  incomeSummary: 1500,
  expenseSummary: -1700,
  periodTotal: 1300,
  year: 2020,
  month: 11,
};
const allTransactions = [
  {
    id: '58307b3c-7f1d-4c11-9c90-6f270aca745e',
    transactionDate: '2020-11-24',
    type: 'EXPENSE',
    comment: 'Основные расходы',
    amount: -200,
    balanceAfter: -200,
    categoryId: '84db5fe1-1309-4ea7-8329-f73b08b14305',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: 'fbd13d6b-f0ad-4b7d-8429-20b8ddfb1150',
    transactionDate: '2019-10-25',
    type: 'EXPENSE',
    comment: '',
    amount: 700,
    balanceAfter: 500,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: 'c7c72cb6-376e-4cb9-ba3d-e3674cc90d3c',
    transactionDate: '2555-11-26',
    type: 'INCOME',
    comment: '',
    amount: 800,
    balanceAfter: 800,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2012-07-15',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2012-07-23',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2012-08-23',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2022-12-15',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2022-07-15',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
  {
    id: '01709506-afc2-4f25-b7db-c4758d3a9a32',
    transactionDate: '2022-07-15',
    type: 'EXPENSE',
    comment: 'string',
    amount: 13.5,
    balanceAfter: 1313.5,
    categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
    userId: 'b9afb261-cc65-4a89-9d71-81c2a8137bc9',
  },
];
export { testSummary, allTransactions };
