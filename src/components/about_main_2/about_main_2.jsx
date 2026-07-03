import './about_main_2.css'
import Promo_middle_all from '../promo/promo_middle_all';
import main_2 from './main_2.jpg'



let menulis

function About_main_2(all) {
    
  return (
    <section>
        <div className='contaiter main_2'>
            <img src={main_2}/>
           <Promo_middle_all
           position = {''}
           />

        </div>
        
    </section>
    
  );
}

export default About_main_2;
