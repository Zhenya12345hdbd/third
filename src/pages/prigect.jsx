
import { autors } from '../components/autors/autors_list';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { menu_about } from '../components/all_component_top/about_data';
import All_component_top from '../components/all_component_top/all_component_top';
import portofolio from '../components/all_component_top/portofolio.jpg'
import Portofolio_item1 from '../components/portofolio/portofolio_item';
import { img_list } from '../components/portofolio/img_list';
import About_main_3 from '../components/about_main_3/about_main_3';
import About_main_4 from '../components/about_main_4/about_main_4';



let imgl




function Progect(all) {
    const { item, path , project } = useParams();
          const menuItem = autors.find((items) => items.item === String(item));
     
      const menuItem2 = img_list.find((item) => item.project === String(project));
          
    
  return (
    
        <div>
            {menuItem.item}
            
            {menuItem2.project}
         
            
        </div>
        
   
    
  );
}

export default Progect;
