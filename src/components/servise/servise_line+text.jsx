


import Line from '../line';


function Servise_line_text(ser) {
    
  return (
    <div>
          <Line
                width={530}
                top={135}
                text = {'SERVISE'}
                />
                <h1 className='big_black_text'>
                    {ser.big_text}
                </h1>
                <p className='gray_small'>
                        {ser.small_text}
                </p>

    </div>
 
  );
}

export default Servise_line_text;
