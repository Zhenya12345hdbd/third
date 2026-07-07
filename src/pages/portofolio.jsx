
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




function Portofolio(all) {
    const { item, path } = useParams();
          const menuItem = autors.find((items) => items.item === String(item));
                
        const menuItem1 = menu_about.find((item) => item.path === String(path));
          
    
  return (
    
        <div>
            ggg
            {menuItem.item}
            <All_component_top
        big = {'PORTOFOLIO'}
        small = {'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
        img = {portofolio}
        text={'PORTOFOLIO'}
        />
            {imgl = img_list.map(image =>
                 <Portofolio_item1
                img = {menuItem.img}
                item ={menuItem.item}
                name = {menuItem.name}
                profession = {menuItem.profession}
                main_img ={image.img}
                flexdDirection = {image.flexdDirection}
                big={image.big}
                left = {image.left}
                right = {image.right}
                project = {image.project}
        />

            )}
            <About_main_3 paddingTop = {80} big ={'Why Choose Us'} text={'SERVICE'}/>
            <About_main_4/>
       
        
            
        </div>
        
   
    
  );
}

export default Portofolio;
