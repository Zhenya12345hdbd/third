

import './servise.css'
import Line from '../line';
import servise_img from './servise_img.jpg'
import { servise_data } from './servise_data';
import Servise_item from './servise_item';
let servis

function Servise() {
    
  return (
    <section>
        <div className='container about servise'>
            <div className='servise_text'>
                 <Line
                width={530}
                top={135}
                text = {'SERVISE'}
                />
                <h1 className='big_black_text'>
                    attractive furniture with the best quality.
                </h1>
                <p className='gray_small'>
                        Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>
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
