
import './footer_last.css';
import logo from '../header/logo.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import tiktok from './tiktok.png';
import youtube from './youtube.png';
import arr from '../servise/arrow-right.png';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function Footer_last() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [forbiddenWords, setForbiddenWords ]= useState()

      
   
  
  /* const validateInput = (value) => {
    const lowerValue = value.toLowerCase();
    
    // Проверяем, содержит ли ввод хотя бы одно запрещенное слово
    const hasForbiddenWord = forbiddenWords.some(word => 
      lowerValue.includes(word)
    );

    if (hasForbiddenWord) {
      return "В тексте найдены запрещенные слова";
    }
    return true; // Валидация пройдена
  }; */


  const onSubmit = async (data) => {
  try {
    const response = await axios.post('/save.php', data);

    if (response.data.success) {
      alert('Данные успешно сохранены!');
      reset();
    } else {
      // Ошибка от PHP (валидация, запрет и т.п.)
      alert('Ошибка на сервере: ' + (response.data.message || 'Неизвестная ошибка'));
    }
  } catch (error) {
    // Ошибка сети, CORS, 500 и т.д.
    let errorMessage = 'Произошла ошибка соединения с сервером.';

    if (error.response) {
      // Сервер ответил (например, 400, 500), но axios считает это ошибкой
      errorMessage += ' Статус: ' + error.response.status;
      if (error.response.data && error.response.data.message) {
        errorMessage += ', Сообщение: ' + error.response.data.message;
      }
    } else if (error.request) {
      // Запрос ушёл, но ответа нет
      errorMessage += ' Нет ответа от сервера.';
    } else {
      // Ошибка в настройке запроса
      errorMessage += ' Детали: ' + error.message;
    }

    console.error('Ошибка сети:', error);
    alert(errorMessage);
  }
};

  return (
    <section>
      <div className='container last'>
        <div className='last_left'>
          <img src={logo} className='logo' alt='Логотип' />
          <h1 className='big_black_text'>One of the best furniture agency.</h1>
        </div>
        <div className='last_right'>
          <p>Enter your email to get the latest news</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              {...register('emailForPost', {
                /* validate : validateInput, */
                required: 'Email обязателен',
                pattern: {
                  value: /^[\w-._%+-]+@([\w-]+\.)+[\w-]{2,}$/,
                  message: 'Некорректный email'
                }
              })}
              placeholder='Email'
            />
            {errors.emailForPost && (
              <div style={{ color: 'red', display: 'block', marginTop: '4px' }}>
                {errors.emailForPost.message}
              </div>
            )}
          


            <button type='submit'>
              <img src={arr} className='arr' alt='Отправить' />
            </button>
          </form>

          <div className='last_social'>
            <p>Follow us On</p>
            <div className='social_icon'>
              <img src={facebook} alt='Facebook' />
              <img src={instagram} alt='Instagram' />
              <img src={tiktok} alt='TikTok' />
              <img src={youtube} alt='YouTube' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer_last;