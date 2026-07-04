import './servise_main_1.css'
import { servise_main_data_1 } from './servise_main_1_data';




let ser_main

function Servise_main_1(all) {
    
  return (
    <section>
        <div className='contaiter servise_main_1'>
            {ser_main = servise_main_data_1.map(ser=>
                <div className='servise_main_1_item'>
                <img src={ser.img}/>
                <div className='servise_main_1_item_right'>
                    <h1 className='black_text_middle'>
                        {ser.big_text}
                    </h1>
                    <p className='gray_small'>
                        Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                    </p>
                </div>

            </div>
            )}
            
           
        </div>
        
    </section>
    
  );
}

export default Servise_main_1;
