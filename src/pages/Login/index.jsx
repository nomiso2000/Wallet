import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import withAuth from '../../HOC/withAuth';
import routes from '../../routes';
import styles from './Login.module.css';
import { logIn } from '../../redux/auth/operations';
import { emailValid } from '../../services/helpers';
import notification from '../../services/notification';
function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.preventDefault();
    if (emailValid(email) && password.length >= 4) {
      dispatch(logIn({ email, password }, history));
    } else {
      if (!emailValid(email)) {
        return notification({
          type: 'warning',
          message: 'Email is not valid!',
        });
      } else if (password.length < 4) {
        console.log(password);
        return notification({
          type: 'warning',
          message: 'Password is to short!',
        });
      }
    }
  };

  return (
    <section className="form-section">
      <h1>Login</h1>
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
        <button className={styles.button} type="submit">
          ВХОД
        </button>
        <Link to={routes.REGISTER.path}>
          {' '}
          <button className={styles.button}>РЕГИСТРАЦИЯ</button>
        </Link>
      </form>
    </section>
  );
}
export default withAuth(Login);
