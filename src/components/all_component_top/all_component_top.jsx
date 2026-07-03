import './all_component_top.css'
import about from './about.jpg'
import Line from '../line';


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
             />
        </div>
        
    </section>
    
  );
}

export default All_component_top;
