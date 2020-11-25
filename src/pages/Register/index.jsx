import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../routes';
import styles from './Register.module.css';
import { register } from '../../redux/auth/operations';
import { emailValid, isGood } from '../../services/helpers';
import notification from '../../services/notification';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        return setUsername(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      case 'repassword':
        setPasswordValid(isGood(e.target.value));
        return setRePassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      emailValid(email) &&
      password.length >= 4 &&
      username.length > 0 &&
      password === rePassword
    ) {
      dispatch(register({ username, email, password }, history));

      // setUsername('');
      // setEmail('');
      // setPassword('');
      // setRePassword('');
      // setPasswordValid('');
    } else {
      if (!emailValid(email)) {
        return notification({
          type: 'warning',
          message: 'Email is not valid!',
        });
      } else if (password.length < 4) {
        return notification({
          type: 'warning',
          message: 'Password is to short!',
        });
      } else if (username.length > 0) {
        return notification({
          type: 'warning',
          message: 'Enter a name',
        });
      } else if (!password === rePassword) {
        return notification({
          type: 'warning',
          message: 'Passwords did not match',
        });
      }
    }
  };
  return (
    <section>
      <h1>Register</h1>
      <div className={styles.container}>
        <h1 className={styles.header}>Register page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Пароль
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Подтвердить Пароль
            <input
              className={styles.input}
              type="password"
              name="repassword"
              value={rePassword}
              placeholder="Подтвердить пароль"
              onChange={handleChange}
            />
          </label>
          {password.length >= 4 && <span>{passwordValid}</span>}
          <br />
          <label>
            Ваше имя
            <input
              className={styles.input}
              type="name"
              name="username"
              value={username}
              placeholder="Ваше имя"
              onChange={handleChange}
            />
          </label>
          <br />
          <button className={styles.button} type="submit">
            РЕГИСТРАЦИЯ
          </button>
          <Link to={routes.LOGIN.path}>
            {' '}
            <button className={styles.button}>ВХОД</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
