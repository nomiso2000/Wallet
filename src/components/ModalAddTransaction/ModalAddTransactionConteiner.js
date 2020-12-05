import { connect } from 'react-redux';
import { closeModalAddTransaction } from '../../redux/transactions/action';
import { addTransaction } from '../../redux/transactions/operations';
import ModalAddTransaction from './ModalAddTransaction';

const mapDispatchToProps = {
  closeModalAddTransaction,
  addTransaction,
};

export default connect(null, mapDispatchToProps)(ModalAddTransaction);
