import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './AddTransactionForm.module.css';

const options = [
  { value: 'Продукты', label: 'Еда' },
  { value: 'Машина', label: 'Авто' },
  { value: 'Забота о себе', label: 'Развитие' },
  { value: 'Забота о детях', label: 'Дети' },
  { value: 'Товары для дома', label: 'Дом' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Досуг', label: 'Досуг' },
  { value: 'Другие расходы', label: 'Остальные' },
];

const SelectForFormik = ({ value, onChange, onBlur }) => {
  const handleChange = val => {
    onChange('category', val);
  };

  const handleBlur = () => {
    onBlur('category', true);
  };

  return (
    <>
      <Select
        placeholder="Category"
        options={options}
        className={styles.select}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: control => ({
            ...control,
            border: '2px solid #b9c9d4',
          }),
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </>
  );
};

SelectForFormik.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default SelectForFormik;
