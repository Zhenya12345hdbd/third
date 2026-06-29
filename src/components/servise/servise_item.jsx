import right from '../servise/arrow-right.png'

function Servise_item(ser) {
    
  return (
   <div className='servise_item'>
                    <div className='servise_left'>
                        <h4>
                        {ser.num}
                         </h4>
                        <h4>
                        {ser.some}
                        </h4>
                    </div>
                    
                    <img src={right} alt=''/>
        </div>
  );
}

export default Servise_item;
