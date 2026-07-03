import './promo.css'
import promo from '../promo/promo.jpg'
import Promo_middle_item from './promo_middle_item';
import { middle } from './promo_middle_data';
import Promo_middle_all from './promo_middle_all';
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
                top={35}
                width={683}
                position={'absolute'}
                />
                <div className='promo_text_90'>
                    <h3>
                        2022<br/> ALL RIGHT RESERVED
                    </h3>
                </div>
            </div>
            
            <div className='promo_down'>
                <img src={promo} alt="" />
                <Promo_middle_all
                position={'absolute'}
                />
            </div>
            
           
        </div>

   </section>
  );
}

export default Promo;
