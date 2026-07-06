import './autors.css'
import { autors } from './autors_list';
import { Link } from 'react-router-dom';


let aut




function Autors(all) {
    
  return (
    <section>
        <div className='contaiter autors'>
            {aut = autors.map(autor =>
            <Link to={`/Portofolio/${autor.item}`} >
                 <div className='autors_item'>
                <img src={autor.img}/>
                <div className='autors_text'>
                    <h3 className='black_text_middle'>
                        {autor.name}
                    </h3>
                    <p className='gray_small'>
                        {autor.profession}
                    </p>

                </div>
            </div>

                
            </Link>
           

            )}
            
          
        </div>
        
    </section>
    
  );
}

export default Autors;
