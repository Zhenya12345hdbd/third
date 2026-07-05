

function Line_location(lin) {
    
  return (  
    <section>
        <div className="container ">
            <div className='up' style={{top: lin.top + 'px' , position:lin.position, right: lin.top + 'px' , alignSelf: lin.align, display : lin.line_display, width : 1200 +'px'}} >
                <h2>
                   {lin.text}
                </h2>
               <div className='line' style={{ width: lin.width + 'px'}}>
                </div>
            </div>
   

        </div>

    </section>
    
                
  );
}

export default Line_location;
