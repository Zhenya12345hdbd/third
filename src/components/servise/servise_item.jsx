import right from '../servise/arrow-right.png'

function Servise_item(ser) {
    
  return (
      <div>
          <div className='servise_item' style={{fontSize: ser.size + 'px' ,width : ser.width + 'px',  }}>
                    <div className='servise_left' style={{gap : ser.gap + 'px',  }}>
                        <h4 >
                        {ser.num}
                         </h4>
                        <h4>
                        {ser.some}
                        </h4>
                    </div>
                    <img src={right} style={{width : ser.width_img + 'px', height : ser.height_img + 'px', }}alt=''/>
          </div>
            <p className='gray_small bla'>
            {ser.text}
            </p>
    </div>
  );
}

export default Servise_item;
