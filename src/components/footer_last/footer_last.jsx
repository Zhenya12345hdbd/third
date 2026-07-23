
import './footer_last.css'
import logo from '../header/logo.png'
import facebook from './/facebook.png'
import instagram from './/instagram.png'
import tiktok from './/tiktok.png'
import youtube from './/youtube.png'
import arr from '../servise/arrow-right.png'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'





function Footer_last() {

 

  // Инициализация хука формы
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Функция обработки успешной отправки
  const onSubmit1 = async (data) => {
    try {
      // Отправка POST запроса на PHP скрипт
      /* const response1 = await axios.post('http://q90828s0.beget.tech/save.php', data); */
      const response1 = await axios.post('http://localhost/save.php', data);
      
      if (response1.data.success) {
        alert('Данные успешно сохранены!');
        reset(); // Очистка формы
      } else {
        alert('Ошибка на сервере: ' + response1.data.message);
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Произошла ошибка соединения с сервером.');
    }
  };
 


    
  return (
    <section>
        <div className='container last'>
          <div className='last_left'>
            <img src={logo} className='logo' alt="" />
            <h1 className='big_black_text'>
                One of the best furniture agency.
            </h1>
          </div>
          <div className='last_right'>
            <p>
                <span></span>Enter  your email to get the laterst news
            </p>
            <form onSubmit={handleSubmit(onSubmit1)}>
             <input type='email' {...register('emailForPost', {
                            required: 'Email обязателен',
                            pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                            message: 'Некорректный email'
                            }})} placeholder='Email'  />
                            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                           
                
                <button type="submit"> 
                   <img  src={arr} className='arr' alt=""  />
          
                </button>
                
            </form>
                
                <div className='last_social'>
                    <p>
                        Follow us On
                    </p>
                    <div className='social_icon'>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={tiktok} alt="" />
                        <img src={youtube} alt="" />

                    </div>

                </div>
          </div>
            
            
        </div>
        
    </section>
  );
};



export default Footer_last;
