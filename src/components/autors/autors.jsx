import './autors.css'
import { autors } from './autors_list';


let aut




function Autors(all) {
    
  return (
    <section>
        <div className='contaiter autors'>
            {aut = autors.map(autor =>
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

            )}
            
          
        </div>
        
    </section>
    
  );
}

export default Autors;
