import styled from 'styled-components';

const TableTransactionHistory = styled.table`
  width: 90%;
  margin: auto;
  font-family: 'Arial';
`;

const TableHeaderRow = styled.thead`
  background-color: #00bcd4;
  tr {
    height: 50px;

    th {
      text-transform: uppercase;
      color: white;
      width: 33%;
    }
  }
`;

const TableRow = styled.tr`
  width: 33%;
  height: 50px;
  background-color: ${props => (props.isEven ? 'white' : '#ecf2f3')};
  td {
    text-transform: capitalize;
    text-align: center;
    width: 33%;
  }
`;

export { TableTransactionHistory, TableHeaderRow, TableRow };
