import './product.css'
import Line from '../line';

function Product_up() {
    
  return (
    <section>
        <div className='container'>
            <Line
            text={'PRODUCT'}
            width={504}
            />
            <div className='product_text'>
                <h1 className='big_black_text'>
                    Choose your product themes.
                </h1>
                <p className='gray_small'>
                    Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.
                </p>

            </div>
            
        </div>
    </section>
    
  );
}

export default Product_up;
