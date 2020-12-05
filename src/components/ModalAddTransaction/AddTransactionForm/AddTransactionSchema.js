import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
  typeOfTransaction: Yup.string().required(),
  category: Yup.string().when('typeOfTransaction', {
    is: typeOfTransaction => typeOfTransaction === 'expense',
    then: Yup.string().required('Категория обязательна!'),
  }),
  value: Yup.number()
    .typeError('Значение должно быть числом!')
    .required('Требуется значение!'),
  comment: Yup.string(),
  timeOfTransaction: Yup.string()
    .matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, {
      message: 'Дата должна быть в формате DD/MM/YYYY',
    })
    .required('Дата обязательна!'),
});

export default AddTransactionSchema;
