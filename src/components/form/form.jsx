import './form.css'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';



function Form() {
     const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3001/email', data);
      setMessage(`Форма успешно отправлена! ID: ${response.data.id}`);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setMessage('Ошибка при отправке формы. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section>
       <div className='container form'>
            <div className='form_top'>
                <form action="" >
                    <label htmlFor="name" className='form_label_text'>First Name</label>
                    <input type='text'   {...register('name', {
                            required: 'Введите ваше имя',
                            pattern: {
                            value: /^[а-яёА-ЯЁ]+$/,
                        },
                         minLength: {
                                value : 5,
                                message: 'Слишком короткое имя',
                             },
                             maxLength: {
                                value : 20 ,
                             message: 'Слишком длинное имя'
                            }, 
                    
                    })} 
                     className='input_small' placeholder='First Name' name='name'/>
                     {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                </form>
                <form>
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
                     className='input_small' placeholder='Last Name' name='last_name'/>
                     {errors.last_name && <span style={{ color: 'red' }}>{errors.last_name.message}</span>}
                </form>
                
            </div>
            <div className='form_bottom'>
                <form>
                    <label htmlFor="email"  className='form_label_text'>Email</label>
                    <input type='email' {...register('email', {
                            required: 'Email обязателен',
                            pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                            message: 'Некорректный email'
                            }})} className='input_big' placeholder='Email' name='email'/>
                            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                </form>

                <form>
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
                   
                </form>
                    <form>
                        <label htmlFor="message" className='form_label_text'>First Name</label>
                        <input type='text'  {...register('message', {
                            required: 'Напишите что_нибудь',
                            pattern: {
                            value: /^[а-яёА-ЯЁ]+$/,
                           },
                           minLength: {
                                value :10,
                                 message: 'Слишком мало текста'
                             }, 
                           
                           })}   className='input_area' placeholder='Message' name='message'/>
                            {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
                    </form>
                <button  type="submit" onClick={handleSubmit(onSubmit)} className='button pos'>Send Massage</button>
            </div>

       </div>
    </section>
    
  );
}

export default Form;
