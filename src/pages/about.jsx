import { useParams } from "react-router-dom";
import Button from "../components/header/button";
import Servise from "../components/servise/servise";
import Product_down from "../components/product_down/product_down";
<<<<<<< HEAD
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
=======
import { menu_about } from "../components/all_component_top/about_data";
import All_component_top from "../components/all_component_top/all_component_top";
import About_main from "../components/about_,main/about_main";

let ertt = <Servise/>;
let display = 'block'

function About(aspid) {
  const { path } = useParams();
      const menuItem = menu_about.find((item) => item.path === String(path));

      if (path == "About"){
         ertt = <Servise/>
         display = 'block'
      }
>>>>>>> c4b73d66bb148f4592b5eef3c012268e054caee4
       if (path == "Services"){
           ertt = <Product_down/>;
           display = 'block'
      } 
<<<<<<< HEAD
      console.log(menuItem)
  return (
    <div>
      <Material
      big = {menuItem.path}
      
      />
        {ertt}
=======
       if (path == "Contact"){
           ertt = <Product_down/>;
            display = 'none'
>>>>>>> c4b73d66bb148f4592b5eef3c012268e054caee4

      } 

  return (
    <div> 
        <All_component_top
        big = {menuItem.big}
        small = {menuItem.small}
        img = {menuItem.img}
        display = {display}
        />
        <About_main/>
        
    </div>
  );
}

export default About;