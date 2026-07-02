
import './footer_blue.css'
import Button from '../header/button';
import { Link } from 'react-router-dom';


function Footer_blue() {
    
  return (
    <section className='footer_blue'>
        <div className='container blue'>
            <h1 className='big_black_text'>
                let's discuss making your interior like a dream place!
            </h1>
            <div className='blue_right'>
                <p className='gray_small'>
                    Contact us below to work together to build your amazing interior
                </p>
                <Link to="/Contact">
                     <Button
                    text={'Contact Us'} 
                    background={'white'}       
                    color = {'black'} 
                    alighSelf={'flex-start'}  
                />
                </Link>
               

            </div>
            
                
        </div>
    </section>
    
  );
}

export default Footer_blue;
