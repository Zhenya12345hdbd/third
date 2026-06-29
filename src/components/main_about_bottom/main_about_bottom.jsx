

import './main_about_bottom.css'
import main_image_bottom from './/about_main.jpg'
import Button from  '../header/button.jsx'
import person from './person.png'




let menulis

function Main_about_bottom() {
    
  return (
    <section>
        <div className='container flex'>
          <div className='Main_about_bottom_img'>
            <img src={main_image_bottom} alt="" />
          </div>
          <div className='table'>
                    <img src={person} alt=''/>
                    <div className='table_text'>
                        <h5>
                            Arga Danaan
                        </h5>
                        <p>
                            CEO of Dananz
                        </p>
                    </div>

                </div>
                <div className='Main_about_bottom_text'>
                    <h4>
                        Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                    </h4>
                    <Button
                    text={'Learn More'}
                    />
                </div>
                
        </div>
    </section>
    
  );
}

export default Main_about_bottom;
