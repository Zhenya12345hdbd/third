import './form.css'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';



function Form() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // Инициализация хука формы
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  // Функция обработки успешной отправки
  const onSubmit = async (data) => {
    try {
      // Отправка POST запроса на PHP скрипт
      /* const response = await axios.post('http://q90828s0.beget.tech/api/form.php', data); */
      const response = await axios.post('/api/form.php', data);
      
      if (response.data.success) {
        alert('Данные успешно сохранены!');
        reset(); // Очистка формы
      } else {
        alert('Ошибка на сервере: ' + response.data.message);
      }
    } catch (error) {
    console.error('Ошибка сети или сервера:', error);

    let msg = 'Произошла ошибка соединения с сервером.';
    if (error.response) {
      // Сервер ответил, но не 2xx
      const data = error.response.data;
      if (data && typeof data.message === 'string') {
        msg = 'Ошибка: ' + data.message;
      } else if (data) {
        msg = 'Сервер вернул ошибку (неизвестный формат).';
      }
    } else if (error.request) {
      msg = 'Нет ответа от сервера. Проверьте подключение.';
    }
    alert(msg);
  }
};



  return (
    <section>
        <div className='container form'>
           <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='form_top'>
                    <div>
                           <label htmlFor="name" className='form_label_text'>First Name</label>
                    <input type='text'   {...register('name', {
                            
                            required: 'Введите ваше имя',
                            pattern: {
                            value: /^[а-яёА-ЯЁ]+$/,
                        },
                         minLength: {
                                value : 4,
                                message: 'Слишком короткое имя',
                             },
                             maxLength: {
                                value : 20 ,
                             message: 'Слишком длинное имя'
                            }, 
                    
                    })} 
                     className='input_small' placeholder='First Name'/>
                     {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                    </div>
                   <div >
                        <label htmlFor="last_name" className='form_label_text'>LAst Name</label>
                    <input type='text'   {...register('last_name', {
                       
                            required: 'Введите вашу фамилию',
                            pattern: {
                            value: /^[а-яёА-ЯЁ]+$/,
                             required: 'Введите влию',
                           },
                                   minLength: {
                                value : 5,
                                message: 'Слишком короткая фамилия',
                             },
                             maxLength: {
                                value : 20 ,
                             message: 'Слишком длинное фамилия'
                            },  
                        })} 
                     className='input_small' placeholder='Last Name'/>
                     {errors.last_name && <span style={{ color: 'red' }}>{errors.last_name.message}</span>}
                   </div>
                
                    
                
                
                  </div>
            <div className='form_bottom'>
                    <label htmlFor="email"  className='form_label_text'>Email</label>
                    <input type='email' {...register('email', {
                          
                            required: 'Email обязателен',
                            pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                            message: 'Некорректный email'
                            }})} className='input_big' placeholder='Email' name='email'/>
                            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                
                 
                    <label htmlFor="phone" className='form_label_text'>Phone Number</label>
                    <input type='tel' {...register('phone', {
                            required: 'телефонт обязателен',
                            pattern: {
                            value: /^((\+7|7|8)+([0-9]){10})$/,
                            message: 'Некорректный номер',
                                    minLength: 9,
                                    message: 'Номер телефона не должен быть меньше 9 цифр'
                            }})} className='input_big' placeholder='Phone' name='phone'/>
                            {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
                   
                 
                     
                        <label htmlFor="message" className='form_label_text'>First Name</label>
                        <input type='text'  {...register('message', {
                        
                            required: 'Напишите что_нибудь',
                            pattern: {
                            value: /^[\p{Script=Cyrillic}\s\p{P}]+$/u,
                           },
                           minLength: {
                                value :10,
                                 message: 'Слишком мало текста'
                             }, 
                           
                           })}   className='input_area' placeholder='Message' name='message'/>
                            {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
                     
                <button  type="submit" className='button pos'>Send Massage</button>
            </div>
        </form>
    </div>
    </section>
    
  );
}

export default Form;
