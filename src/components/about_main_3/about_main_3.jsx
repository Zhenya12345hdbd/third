import './about_main_3.css'
import Servise_line_text from '../servise/servise_line+text';






function About_main_3(all) {
    
  return (
    <section>
        <div className='contaiter main_2' style = {{paddingTop : all.paddingTop + 'px'}}>
            <Servise_line_text
            text={all.text}
            big={all.big}
            small_text={'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'}
            width_small_text={470}
            />
           
        </div>
        
    </section>
    
  );
}

export default About_main_3;
