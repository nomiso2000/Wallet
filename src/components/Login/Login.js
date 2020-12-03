import React, { Component } from 'react';
import { ButtonEnter } from './buttons/buttonEnter/ButtonEnter';
import { ButtonRegistration } from './buttons/buttonRegistration/ButtonRegistration';
import { Container } from './container/Container';
import { EmailForm } from './EmailForm/EmailForm';
import { PassForm } from './PassForm/PassForm';
import { FormWrapper } from './FormWrapper/FormWrapper';
import styles from './Login.module.css';
import { ImgMain } from './ImageMain/ImageMain';


export default class Login extends Component {
    render() {
        return (
            <Container >
                 <div className={styles.leftWrapper}>  
                    <div className={styles.violetCircle}></div>
                    <ImgMain/> 
                    <span className={styles.textApp}>Finance App</span>
                </div>
                <div className={styles.rightWrapper}>
                  <FormWrapper>
                    <p className={styles.textWallet}>Wallet</p>
                    <EmailForm />
                    <PassForm />
                    <ButtonEnter />
                    <ButtonRegistration /> 
                  </FormWrapper>
                  <div className={styles.pinkCircle}></div>   
                </div>    
               
            </Container>                        
        )
    }
    
}