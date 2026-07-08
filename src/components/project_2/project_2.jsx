import './project_2.css'


let imgl


function Progect_2(all) {
    
          
    
  return (
    <section>
        <div className='container project_2'> 
            <img src={all.img1} classNamealt='small_image'/>
            <img src={all.img2}  classNamealt='small_image' alt=''/>
            <img src={all.img3} className='big_image' alt=''/>
            <img src={all.img4}  classNamealt='small_image' alt=''/>
            <img src={all.img5}  classNamealt='small_image' alt=''/>
            
        </div>
    </section>
  );
}

export default Progect_2;
