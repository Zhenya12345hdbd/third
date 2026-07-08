
import { autors } from '../components/autors/autors_list';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { menu_about } from '../components/all_component_top/about_data';
import All_component_top from '../components/all_component_top/all_component_top';
import portofolio from '../components/all_component_top/portofolio.jpg'
import Portofolio_item1 from '../components/portofolio/portofolio_item';
import { img_list } from '../components/portofolio/img_list';
import Progect_1 from '../components/project_1/project_1';
import minimalist from '../components/all_component_top/minimalist.jpg'
import Progect_2 from '../components/project_2/project_2';




let imgl




function Progect(all) {
    const { item, path , project } = useParams();
          const menuItem = autors.find((items) => items.item === String(item));
     
      const menuItem2 = img_list.find((item) => item.project === String(project));
          
    
  return (
    
        <div>
            {menuItem.item}
            
            {menuItem2.project}
         
             <All_component_top
                big = {menuItem2.big}
                small = {'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
                img = {minimalist}
                line_display = {'none'}
                />
                <Progect_1
                project_1_left_text = {menuItem2.project_1_left_text}
                project_1_right_text = {menuItem2.project_1_right_text}
                
                />
                <Progect_2
                img1 = {menuItem2.img1}
                img2 = {menuItem2.img2}
                img3 = {menuItem2.img3}
                img4 = {menuItem2.img4}
                img5 = {menuItem2.img5}
                
                
                />

        </div>
        
   
    
  );
}

export default Progect;
