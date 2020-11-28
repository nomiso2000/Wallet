import React from 'react';
import selectsvg from '../../styles/css/icon/formsvgfile.svg';
import masage from '../../styles/css/icon/masage.svg';
import profil from '../../styles/css/icon/profil.svg';
import regist from '../../styles/css/icon/regist.svg';
import './resterForm.css';

const ResterForm = () => {
  return (
    <div className='blockCover'>
   <div className='firstblock'>
   <img  className= "imgrigister" src={selectsvg}/>
<h2 className='titleselect'>Finance App</h2>

   </div>
   <div className='endblock'>


{/* <div className='blockForm'> </div> */}
<form className='form' >
					<label class = 'list'>
			             <img src={masage}/>
						<input
                        placeholder='E-mail'autoFocus	type="text"	name="name"	autoComplete="off"	className='input'/>
			        </label>

					<label class = 'list'>
                    <img src={regist}/>
         				<input   placeholder='Пароль'type="number"	name="number"autoComplete="off"	className='input'/>
					</label>
                    <label class = 'list'>
                    <img src={regist}/>
						<input  placeholder='Подтвердите пароль'type="number"name="number"	autoComplete="off"	className='input'/>
					</label>
                    <label class = 'list'>
                    <img src={profil}/>
						<input placeholder='Ваше имя' type="number"	name="number"	autoComplete="off"	className='input'/>
					</label>
<div class= "buttonBlok">
					<button className='button' type="submit">
						регистрация
					</button>
                    <button className='button' type="submit">
						вход
					</button>
					</div>
				</form>
              
   </div>
    </div>
  );
};

export default ResterForm;
