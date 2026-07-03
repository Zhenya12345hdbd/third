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

let menuItem
let ertt = <Servise/>;
let display = 'block'

function About(aspid) {
  const { path } = useParams();
      
      const menuItem = menu_about.find((item) => item.path === String(path));
  
      if (path == "About"){
         ertt = [<About_main_2/>,<About_main_3/> ]
         display = 'block'
      }
       if (path == "Services"){
           ertt = <Product_down/>;
           display = 'block'
      } if (path == "Contact"){           
       ertt = <Product_down/>
            display = 'none'

      } 

  return (
    <div> 
        <All_component_top
        big = {menuItem.big}
        small = {menuItem.small}
        img = {menuItem.img}
        display = {display}
        text={menuItem.line_text}
        />
        <About_main/>
        {ertt}
        
        
    </div>
  );
}

export default About;