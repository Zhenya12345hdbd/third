import { useParams } from "react-router-dom";
import Button from "../components/header/button";
import Servise from "../components/servise/servise";
import Product_down from "../components/product_down/product_down";

let ertt = <Servise/>;

function About() {
      const { path } = useParams();

      if (path == "About"){
         ertt = <Servise/>
      }
       if (path == "Services"){
           ertt = <Product_down/>;
      } 
  return (
    <div>
        <h1>из апп {path}</h1>
        {ertt}

    </div>
  );
}

export default About;