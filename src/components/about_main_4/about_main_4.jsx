import './about_main_4.css'
import { quality } from './about_main_4_data';
let qual

function About_main_4(all) {
    
  return (
    <section>
        <div className='contaiter main_4'>
            {qual = quality.map(qew =>
            <div className='about_main_4_item'>
                <div className='circle'>
                </div>
                <h3>
                    {qew.item}
                </h3>
                <p className='gray_small'>
                    Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>

          </div>

            ) }
          
        </div>
        
    </section>
    
  );
}

export default About_main_4;
