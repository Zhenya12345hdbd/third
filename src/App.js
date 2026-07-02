import Main_Page from "./pages/main";
import Header from "./components/header/header";
import Footer_blue from "./components/footer_blue/footer_blue";
import Footer_last from "./components/footer_last/footer_last";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Not_found from "./pages/not_found";
import About from "./pages/about";
import { useParams } from "react-router-dom";
import { menu_about } from "./components/all_component_top/about_data";


function App() {




  
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="/" element={<Main_Page/>}/>
         <Route path="/:path" element={<About 
                                             />}/>
          <Route path="*" element={<Not_found />} />
      </Routes>
     
      <Footer_blue/>
      <Footer_last/>

    </div>
  );
}

export default App;
