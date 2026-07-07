

import './main_about_bottom.css'
import main_image_bottom from './/about_main.jpg'
import Button from  '../header/button.jsx'
import person from './person.png'




let menulis

function Person_table(man) {
    
  return (
          <div className='table' style={{ left: man.left,right :man.right ,}}>
                    <img src={man.img} alt=''/>
                    <div className='table_text'>
                        <h5>
                           {man.name} 
                        </h5>
                        <p>
                           {man.profession} 
                        </p>
                    </div>

                </div>
 
    
  );
}

export default Person_table;
