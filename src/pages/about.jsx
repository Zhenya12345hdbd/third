import { useParams } from "react-router-dom";
import Button from "../components/header/button";
import Servise from "../components/servise/servise";
let butmi = Servise;
function About() {

      const { path } = useParams();

      if (path == "About"){
         console.log('12')
      }
  return (
    <div>
        <h1>{butmi}</h1>
        <h1>из апп {path}</h1>

    </div>
  );
}

export default About;