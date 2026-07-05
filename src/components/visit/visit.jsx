
import './visit.css'
import { visit_list } from './visit_list';


let sity

function Visit() {
    
  return (
    <section>
        <div className='container visit'>

           <div className='visit_left'>
            <h1 className='big_black_text'>
                Visit Our Stores
            </h1>
            <p className='gray_small'>
                Find us at these locations.
            </p>
            <h3 className='black_text_middle'>
                Email
            </h3>
            <p className='gray_small'>
                dananz@gmail.com
            </p>
            <h3 className='black_text_middle'>
                Phone
            </h3>
            <p className='gray_small'>
                +62 815 002 1000
            </p>
            </div>  
            <div className='visit_right'>
                {sity = visit_list.map(vis=>
                    <div className='visit_item'>
                        <h3 className='black_text_middle'>
                            {vis.city}
                        </h3>
                        <p className='gray_small'>
                            {vis.small_text}
                        </p>

                </div>
                )}
                

            </div>
        </div>
    </section>
    
  );
}

export default Visit;
