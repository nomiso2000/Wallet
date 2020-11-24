import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import MaskInput from 'react-maskinput';
import routes from '../../routes';
import styles from './Register.module.css';
import { register } from '../../redux/auth/operations';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <h1>Register</h1>
      <div className={styles.container}>
        <h1 className={styles.header}>Register page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            name
            <input
              className={styles.input}
              type="name"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
