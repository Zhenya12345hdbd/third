import { useParams } from "react-router-dom";
import Button from "../components/header/button";
import Servise from "../components/servise/servise";
import Product_down from "../components/product_down/product_down";
import { menu_about } from "../components/all_component_top/about_data";
import Material from "../components/material/material";
import All_component_top from "../components/all_component_top/all_component_top";
import About_main from "../components/about_,main/about_main";
import About_main_2 from "../components/about_main_2/about_main_2";
import About_main_3 from "../components/about_main_3/about_main_3";
import About_main_4 from "../components/about_main_4/about_main_4";
import Servise_main_1 from "../components/servise_main_1/servise_main_1";
import Product_up from "../components/product/product";
import Autors from "../components/autors/autors";
import Form from "../components/form/form";
import Line from "../components/line";
import Visit from "../components/visit/visit";
import Line_location from "../components/line_location";
import { autors } from "../components/autors/autors_list";
import Portofolio from "./portofolio";



let menuItem
let ertt = <Servise/>;
let display = 'block'
let line_display = 'flex'

function About(aspid) {
  const { path, item } = useParams();
      
      const menuItem = menu_about.find((item) => item.path === String(path));
      
  
      if (path == "About"){
         ertt = [<About_main/>,<About_main_2/>,<About_main_3 big ={menuItem.big_text2} text={menuItem.small_text2}/>,<About_main_4/>]
         display = 'block'
         line_display = 'flex'
      }
       if (path == "Services"){
           ertt = [<Servise_main_1/>, <Product_up/>, <Product_down padding_down={100}/>]
           display = 'block'
           line_display = 'flex'
      }if (path == "Our"){
           ertt = [<About_main_3 big ={menuItem.big_text1} text = {menuItem.line_text} paddingTop = {0}/>,<Autors/>,<About_main_3 big ={menuItem.big_text2} text = {menuItem.small_text1} paddingTop = {100}/>,<About_main_4/> ]
           display = 'block'
           line_display = 'none'
      }
       if (path == "Contact"){     
        ertt = [<Form/>,<Line_location align={'start'} display = {'flex'} align ={'start'} text = {menuItem.line_text} width={510}/>, <Visit/> ]      
            display = 'none'
            line_display= 'none'

      }  

  return (
    <div> 
        <All_component_top
        big = {menuItem.big}
        small = {menuItem.small}
        img = {menuItem.img}
        display = {display}
        text={menuItem.line_text}
        line_display = {line_display}
        />
        {ertt}
        
        
    </div>
  );
}

export default About;