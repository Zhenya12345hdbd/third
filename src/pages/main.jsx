
import Promo from "../components/promo/promo";
import Main_about from "../components/main_about_top/main_about";
import Main_about_bottom from "../components/main_about_bottom/main_about_bottom";
import Servise from "../components/servise/servise";
import Product_up from "../components/product/product";
import Product_down from "../components/product_down/product_down";
import Material from "../components/material/material";

function Main_Page() {
  return (
    <div>
        <Promo/>
        <Main_about/>
        <Main_about_bottom/>
        <Servise/>
        <Product_up/>
        <Product_down/>
        <Material/>
    </div>
  );
}

export default Main_Page;