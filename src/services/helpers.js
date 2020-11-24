import moment from 'moment';

export const passwordValid = password => {
  if (password.length < 8) return false;
  const regExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[~!^(){}<>%@#&*+.,=_-]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};

export const emailValid = email => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExp.test(email)) return false;
  return true;
};

export const phoneValid = phone => {
  //  eslint-disable-next-line
  const regExp = /^[\+][1-9]{1}[\d]{9,13}$/;
  if (!regExp.test(phone)) return false;
  return true;
};

export const formatDate = date => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};
