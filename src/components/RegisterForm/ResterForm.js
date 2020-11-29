import React from 'react';
import selectsvg from '../../styles/css/icon/formsvgfile.svg';
import masage from '../../styles/css/icon/masage.svg';
import profil from '../../styles/css/icon/profil.svg';
import regist from '../../styles/css/icon/regist.svg';
import sirclesvg from '../../styles/css/icon/orangesircle.svg'
import style from './resterForm.module.scss';

const ResterForm = () => {
  return (
    <div className={style.blockCover}>
   <div className={style.firstblock}>
   <img  className= {style.imgrigister} src={selectsvg}/>
<h2 className={style.titleselect}>Finance App</h2>

   </div>
   <div className={style.endblock}>

<img className={style.sircle} src={sirclesvg}/>
{/* <div className='blockForm'> </div> */}
<form className={style.form} >
					<label className = {style.list}>
			             <img src={masage}/>
						<input
                        placeholder='E-mail'autoFocus	type="text"	name="name"	autoComplete="off"	className={style.input}/>
			        </label>

					<label className = {style.list}>
                    <img src={regist}/>
         				<input   placeholder='Пароль'type="text"	name="number"autoComplete="off"	className={style.input}/>
					</label>
                    <label className = {style.list}>
                    <img src={regist}/>
						<input  placeholder='Подтвердите пароль'type="text"name="number"	autoComplete="off"	className={style.input}/>
					</label>
                    <label className = {style.list}>
                    <img src={profil}/>
						<input placeholder='Ваше имя' type="text"	name="number"	autoComplete="off"	className={style.input}/>
					</label>
<div class= {style.buttonBlok}>
					<button className={style.button} type="submit">
						регистрация
					</button>
                    <button className={style.button} type="submit">
						вход
					</button>
					</div>
				</form>
              
   </div>
    </div>
  );
};

export default ResterForm;
