
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

function Footer_last() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Используй относительный путь, если PHP лежит в той же папке, что и сборка, или реальный URL
      const response = await axios.post('/save.php', data);

      if (response.data.success) {
        alert('Данные успешно сохранены!');
        reset();
      } else {
        alert('Ошибка на сервере: ' + response.data.message);
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
          <img src={logo} className='logo' alt='Логотип' />
          <h1 className='big_black_text'>One of the best furniture agency.</h1>
        </div>
        <div className='last_right'>
          <p>Enter your email to get the latest news</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              {...register('emailForPost', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[\w-._%+-]+@([\w-]+\.)+[\w-]{2,}$/,
                  message: 'Некорректный email'
                }
              })}
              placeholder='Email'
            />
            {errors.emailForPost && (
              <span style={{ color: 'red', display: 'block', marginTop: '4px' }}>
                {errors.emailForPost.message}
              </span>
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