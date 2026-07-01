
import './footer_last.css'
import logo from '../header/logo.png'
import facebook from './/facebook.png'
import instagram from './/instagram.png'
import tiktok from './/tiktok.png'
import youtube from './/youtube.png'
import arr from '../servise/arrow-right.png'



function Footer_last() {
    
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
                <input type="email" placeholder='Email Address'/>
                <img src={arr} className='arr' alt="" />
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
}

export default Footer_last;
