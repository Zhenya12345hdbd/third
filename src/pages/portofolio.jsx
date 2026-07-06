
import { autors } from '../components/autors/autors_list';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { menu_about } from '../components/all_component_top/about_data';
import All_component_top from '../components/all_component_top/all_component_top';
import portofolio from '../components/all_component_top/portofolio.jpg'


let aut




function Portofolio(all) {
    const { item, path } = useParams();
          const menuItem = autors.find((items) => items.item === String(item));
                
                const menuItem1 = menu_about.find((item) => item.path === String(path));
          
    
  return (
    <section>
        <div className='contaiter autors'>
            ggg
            {menuItem.item}
           

            <All_component_top
        big = {'PORTOFOLIO'}
        small = {'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
        img = {portofolio}
       
        text={'PORTOFOLIO'}
        
        />
            
        </div>
        
    </section>
    
  );
}

export default Portofolio;
