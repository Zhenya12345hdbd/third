
import { autors } from '../components/autors/autors_list';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { menu_about } from '../components/all_component_top/about_data';
import All_component_top from '../components/all_component_top/all_component_top';


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
            {menuItem1.path}

            <All_component_top
        big = {menuItem1.big}
        small = {menuItem1.small}
        img = {menuItem1.img}
       
        text={menuItem1.line_text}
        
        />
            
        </div>
        
    </section>
    
  );
}

export default Portofolio;
