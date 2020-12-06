import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../routes';
import style from './Register.module.css';
import withAuth from '../../HOC/withAuth';
import { register } from '../../redux/auth/operations';
import { emailValid, isGood } from '../../services/helpers';
import notification from '../../services/notification';
import selectsvg from '../../styles/css/icon/formsvgfile.svg';
import masage from '../../styles/css/icon/masage.svg';
import profil from '../../styles/css/icon/profil.svg';
import regist from '../../styles/css/icon/register.svg';
import sirclesvg from '../../styles/css/icon/orangesircle.svg';
import Ceshsvg from '../../styles/css/icon/Cesh.svg';
import fioletsvg from '../../styles/css/icon/fiolet.svg';
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
    <div className={style.blockCover}>
      <div className={style.firstblock}>
        <img className={style.imgrigister} src={selectsvg} />
        <img className={style.fiolet} src={fioletsvg} />
        <h2 className={style.titleselect}>Finance App</h2>
      </div>
      <div className={style.endblock}>
        <img className={style.sircle} src={sirclesvg} />
        {/* <h1 className={styles.header}>Register page</h1>  */}
        <form onSubmit={handleSubmit} className={style.form}>
          <img className={style.imgCesh} src={Ceshsvg} />
          <label className={style.list}>
            <img src={masage} />
            <input
              className="input"
              className={style.input}
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              autoFocus
              onChange={handleChange}
            />
          </label>
          <label className={style.list}>
            <img src={regist} />
            <input
              className={style.input}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={handleChange}
            />
          </label>
          <label className={style.list}>
            <img src={regist} />
            <input
              className={style.input}
              type="password"
              name="repassword"
              value={rePassword}
              placeholder="Подтвердить пароль"
              onChange={handleChange}
            />
          </label>
          {/* {password.length >= 4 && <span>{passwordValid}</span>} */}

          <label className={style.list}>
            <img src={profil} />
            <input
              className={style.input}
              type="name"
              name="username"
              value={username}
              placeholder="Ваше имя"
              onChange={handleChange}
            />
          </label>
          <div class={style.buttonBlok}>
            <button className={style.button} type="submit">
              РЕГИСТРАЦИЯ
            </button>
            <Link to={routes.LOGIN.path}>
              {' '}
              <button className={style.button}>ВХОД</button>
            </Link>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default withAuth(Register);
