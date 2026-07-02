import { useParams } from "react-router-dom";
import Button from "../components/header/button";
import Servise from "../components/servise/servise";
import Product_down from "../components/product_down/product_down";
import { menu_about } from "./about_data";
import Material from "../components/material/material";

let ertt 
let menuItem

function About(aspid) {
  const { path } = useParams();
      
      const menuItem = menu_about.find((item) => item.path === String(path));
      if (path == "About"){
         ertt = <Servise/>
         
      } 
       if (path == "Services"){
           ertt = <Product_down/>;
      } 
      console.log(menuItem)
  return (
    <div>
      <Material
      big = {menuItem.path}
      
      />
        {ertt}

    </div>
  );
}

export default About;