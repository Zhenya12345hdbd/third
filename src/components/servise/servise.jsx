

import './servise.css'
import Line from '../line';
import servise_img from './servise_img.jpg'
import { servise_data } from './servise_data';
import Servise_item from './servise_item';
import Servise_line_text from './servise_line+text';
let servis

function Servise() {
    
  return (
    <section>
        <div className='container about servise'>
            <div className='servise_text'>
                <Servise_line_text
                    big_text={'attractive furniture with the best quality.'}
                    small_text={'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'}
                />
               
                <div className='servise_list'>
                     {servis =servise_data.map(sert =>
                        <Servise_item
                        num={sert.num}
                        some={sert.some}
                        />

                    )}
                    <div className='servise_img'>
                        <img src={servise_img} alt="" />
                    </div>
                

                 </div>
            </div>
            
               
                
        </div>
    </section>
    
  );
}

export default Servise;
