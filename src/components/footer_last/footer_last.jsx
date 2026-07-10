
import './footer_last.css'
import logo from '../header/logo.png'
import facebook from './/facebook.png'
import instagram from './/instagram.png'
import tiktok from './/tiktok.png'
import youtube from './/youtube.png'
import arr from '../servise/arrow-right.png'
import { useState } from 'react'
import axios from 'axios';



function Footer_last() {

  const [formData, setFormData] = useState({
    email: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    try {
      const res = await axios.post('http://localhost:3001/email', formData);
      setResponse(res.data); // сервер вернёт созданный объект с id
    } catch (err) {
      setError(err.response?.data || err.message || 'Ошибка отправки');
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
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email Address'/>
                <img src={arr} className='arr' alt="" onClick={handleSubmit} />
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
