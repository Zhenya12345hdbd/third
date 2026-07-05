import './all_component_top.css'
import about from './about.jpg'
import Line from '../line';
import Servise_line_text from '../servise/servise_line+text';


let menulis

function All_component_top(all) {
    
  return (
    <section>
        <div className='contaiter all_component'>
            <h1>
                {all.big}
            </h1>
            <p>
               {all.small}
            </p>
            <img src={all.img} style={{display: all.display }} alt=''/>
            <Line
                text={all.text}
                width ={464}
                align={'start'}
                line_display = {all.line_display}
             />
             
             
        </div>
        
    </section>
    
  );
}

export default All_component_top;
