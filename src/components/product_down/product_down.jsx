import './product_down.css'
import Servise_item from '../servise/servise_item';
import { product_down_data } from './product_down_data';

let down
function Product_down(prod) {
    
  return (
    <section>
        <div className='container product_down' style ={{paddingBottom:prod.padding_down +'px' }}>
        {down = product_down_data.map(dow =>
            <Servise_item
            num = {dow.num}
            some = {dow.some}
            width = {1200}
            size = {32}
            width_img = {32}
            height_img = {32}
            gap = {80}
            text = {'the use of simple and limited elements to get the best effect or impression.'}
            />
            
        )}
            
          
        </div>
    </section>
    
  );
}

export default Product_down;
