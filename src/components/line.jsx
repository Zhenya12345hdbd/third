

function Line(lin) {
    
  return (
    <div className='up' style={{top: lin.top + 'px' , position:lin.position, right: lin.top + 'px' , alignSelf: lin.align, display : lin.line_display}} >
                <h2>
                   {lin.text}
                </h2>
               <div className='line' style={{ width: lin.width + 'px'}}>
                </div>
            </div>
   
                
  );
}

export default Line;
