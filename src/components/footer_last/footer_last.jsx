
import './footer_last.css'
import logo from '../header/logo.png'
import facebook from './/facebook.png'
import instagram from './/instagram.png'
import tiktok from './/tiktok.png'
import youtube from './/youtube.png'
import arr from '../servise/arrow-right.png'
import { useState } from 'react'
import axios from 'axios'





function Footer_last() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Простая валидация email через регулярное выражение
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    if (!validateEmail(email)) {
      setError('Пожалуйста, введите корректный email-адрес.');
      setLoading(false);
      return;
    }

    try {
      // Отправка данных на JSON Server
       await axios.post('http://localhost:3001/email', {
        email: email,
        timestamp: new Date().toISOString(),
      });

      setSuccess(true);
      setEmail(''); // Очистить поле
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setError('Не удалось отправить данные. Попробуйте позже.');
    } finally {
      setLoading(false);
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
                <input id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder='Email Address'/>
                <img src={arr} className='arr' alt="" onClick={handleSubmit} />
                {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginBottom: '10px' }}>Email успешно отправлен!</p>}
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
