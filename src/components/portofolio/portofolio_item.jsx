import './portofolio_item.css'
import first from './first.jpg'
import { Link } from 'react-router-dom';
import Button from '../header/button';
import Person_table from '../main_about_bottom/person_table';


let aut




function Portofolio_item1(all) {
    
  return (
    <section>
        <div className='contaiter portofolio' style={{flexDirection: all.flexdDirection,}}>
            <div className='portofolio_img'>
                <img src={all.main_img} alt="" />
            </div>
            <Person_table
                img = {all.img}
                name = {all.name}
                profession = {all.profession}
                right = {all.right}
                left = {all.left}
            />

            <div className='portofolio_text'>
                <h3 className='black_text_middle'>
                    {all.big}
                </h3>
                <p className='gray_small'>
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
                <Link to={`/Our/${all.item}/${all.project}`}><Button text={'See More'}/></Link>

            </div>
        </div> 
        
    </section>
    
  );
}

export default Portofolio_item1;
