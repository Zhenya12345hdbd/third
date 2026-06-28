import './promo.css'
import promo from '../promo/promo.jpg'
import Promo_middle_item from './promo_middle_item';
import { middle } from './promo_middle_data';
import Line from '../line';

let midl

function Promo() {
    
  return (
   <section>
        <div className='container padding'>
            <div className='promo_up'>
                <div className='big_text'>
                    <h1>
                        Design your interor with high quality.
                    </h1>
                </div>
                <div className='line'>
                </div>
                <Line
                top={50}
                width={683}
                />
                <div className='promo_text_90'>
                    <h3>
                        2022<br/> ALL RIGHT RESERVED
                    </h3>
                </div>
            </div>
            
            <div className='promo_down'>
                <img src={promo} alt="" />
                <div className='promo_middle'>
                {midl = middle.map(med =>
                    
                <Promo_middle_item
                        big_text={med.big_text}
                        small_text={med.small_text}
                />
                )}
            </div>
            </div>
            
           
        </div>

   </section>
  );
}

export default Promo;
