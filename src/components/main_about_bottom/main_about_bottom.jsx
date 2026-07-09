

import './main_about_bottom.css'
import main_image_bottom from './/about_main.jpg'
import Button from  '../header/button.jsx'
import person from './person.png'
import Person_table from './person_table.jsx'




let menulis

function Main_about_bottom() {
    
  return (
    <section>
        <div className='container flex'>
          <div className='Main_about_bottom_img'>
            <img src={main_image_bottom} alt="" />
          </div>
                <Person_table
                name = {'Arga Danaan'}
                profession = {'CEO of Dananz'}
                img = {person}
                right = {'150px'}
                />
                
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
