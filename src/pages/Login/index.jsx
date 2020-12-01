// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import withAuth from '../../HOC/withAuth';
// import routes from '../../routes';
// import styles from './Login.module.css';
// import { logIn } from '../../redux/auth/operations';
// import { emailValid } from '../../services/helpers';
// import notification from '../../services/notification';
// function Login() {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleChange = e => {
//     switch (e.target.name) {
//       case 'email':
//         return setEmail(e.target.value);
//       case 'password':
//         return setPassword(e.target.value);
//     }
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     e.preventDefault();
//     if (emailValid(email) && password.length >= 4) {
//       dispatch(logIn({ email, password }, history));
//     } else {
//       if (!emailValid(email)) {
//         return notification({
//           type: 'warning',
//           message: 'Email is not valid!',
//         });
//       } else if (password.length < 4) {
//         console.log(password);
//         return notification({
//           type: 'warning',
//           message: 'Password is to short!',
//         });
//       }
//     }
//   };

//   return (
//     <section className="form-section">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           E-mail
//           <input
//             className={styles.input}
//             type="email"
//             name="email"
//             value={email}
//             placeholder="E-mail"
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Пароль
//           <input
//             className={styles.input}
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Пароль"
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button className={styles.button} type="submit">
//           ВХОД
//         </button>
//         <Link to={routes.REGISTER.path}>
//           {' '}
//           <button className={styles.button}>РЕГИСТРАЦИЯ</button>
//         </Link>
//       </form>
//     </section>
//   );
// }
// export default withAuth(Login);
import React, { useState, useEffect } from 'react';
import { ButtonEnter } from './ButtonEnter';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRegistration } from './ButtonRegistration';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Container } from './Container';
import { FormWrapper } from './FormWrapper';
import styles from './Login.module.css';
import { ImgMain } from './ImageMain';
import EmailIcon from '@material-ui/icons/Email';
import { emailValid } from '../../services/helpers';
import { logIn } from '../../redux/auth/operations';
import notification from '../../services/notification';
import LockIcon from '@material-ui/icons/Lock';
import emailStyles from './EmailForm/EmailForm.module.css';
import passStyles from './PassForm/PassForm.module.css';
import buttonStyles from './ButtonEnter/ButtonEnter.module.css';

export default function Login() {
  const dispatch = useDispatch();
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
    <Container className={styles.backGround}>
      <div className={styles.grayBG}>
        <FormWrapper>
          <p className={styles.loginP}>Wallet</p>

          <form onSubmit={handleSubmit}>
            <label>
              <EmailIcon className={emailStyles.EmailIcon} />
              <input
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="E-mail"
                className={emailStyles.EmailForm}
                autocomplete="off"
              />
            </label>
            <label>
              <LockIcon className={passStyles.LockIcon} />
              <input
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
                placeholder="Пароль"
                className={passStyles.PassForm}
                autocomplete="off"
              />
            </label>
            <button type="submit" className={buttonStyles.Button}>
              ВХОД
            </button>
          </form>
          <ButtonRegistration />
        </FormWrapper>
        <div className={styles.pinkCircle}></div>
      </div>

      <ImgMain />
      <div className={styles.violetCircle}></div>
      <span className={styles.span}>Finance App</span>
    </Container>
  );
}
