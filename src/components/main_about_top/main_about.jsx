import './main_about.css'

import Line from '../line'


let menulis

function Main_about() {
    
  return (
    <section>
        <div className='container about'>
                <Line
                width={530}
                top={135}
                text = {'About'}
                />
            <div className='About_big_text'>
                <h1 className='big_black_text'>“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h1>
            </div>
        </div>
    </section>
    
  );
}

export default Main_about;
