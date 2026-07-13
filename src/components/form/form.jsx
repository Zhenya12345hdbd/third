import './form.css'
import { useState } from 'react'
import axios from 'axios'

let display = 'none'

function Form() {


    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Простая валидация email через регулярное выражение
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  const validatePhone = (value) => {
    const phoneRegex = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    return phoneRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    if (!validateEmail(email) ) {
      setError('Пожалуйста, введите корректный email-адрес.');
      setLoading(false);
      display = 'block'
      return;
    }
    if (!validatePhone(phone) ) {
      setError('Пожалуйста, введите корректный номер телефона.');
      setLoading(false);
      display = 'block'
      return;
    }

    try {
      // Отправка данных на JSON Server
       await axios.post('http://localhost:3001/email', {
        email: email,
        message : message,
        phone : phone,
        timestamp: new Date().toISOString(),
      });

      setSuccess(true);
      setEmail(''); // Очистить поле
      display = 'none'
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setError('Не удалось отправить данные. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <section>
       <div className='container form'>
            <div className='form_top'>
                <form action="" >
                    <label htmlFor="name" className='form_label_text'>First Name</label>
                    <input type='text' className='input_small' placeholder='First Name' name='name'/>
                </form>
                <form>
                    <label htmlFor="last_name" className='form_label_text'>First Name</label>
                    <input type='text' className='input_small' placeholder='Last Name' name='last_name'/>
                </form>
                
            </div>
            <div className='form_bottom'>
                <form>
                    <label htmlFor="email" className='form_label_text'>Email</label>
                    <input type='email' id="email"
                                  type="email"
                                  value={email}
                                  name= 'email'
                                  onChange={(e) => setEmail(e.target.value)} className='input_big' placeholder='Email' name='email'/>
                                  
          {<p style={{ color: 'red', marginBottom: '10px' , display : display,}}>Пожалуйста, введите корректный email-адрес.</p>}
          {success && <p style={{ color: 'green', marginBottom: '10px' }}>Email успешно отправлен!</p>}
                </form>

                <form>
                    <label htmlFor="phone" className='form_label_text'>Phone Number</label>
                    <input type='tel'
                                    value={phone}
                                    name= 'phone'
                                    onChange={(e) => setPhone(e.target.value)} className='input_big' placeholder='Phone' name='phone'/>
                    {<p style={{ color: 'red', marginBottom: '10px' ,display : display,}}>Пожалуйста, введите корректный номер телефона в формате 999999999.</p>}
                    {success && <p style={{ color: 'green', marginBottom: '10px' }}>Email успешно отправлен!</p>}
                </form>
                
                    <form>
                        <label htmlFor="message" className='form_label_text'>First Name</label>
                        <input type='text'  className='input_area' placeholder='Message' name='message'/>
                    </form>
                <button onClick={handleSubmit} type="submit" className='button pos'>Send Massage</button>
            </div>

       </div>
    </section>
    
  );
}

export default Form;
