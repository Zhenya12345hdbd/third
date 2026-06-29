
import Promo from "../components/promo/promo";
import Main_about from "../components/main_about_top/main_about";
import Main_about_bottom from "../components/main_about_bottom/main_about_bottom";
import Servise from "../components/servise/servise";

function Main_Page() {
  return (
    <div>
        <Promo/>
        <Main_about/>
        <Main_about_bottom/>
        <Servise/>
    </div>
  );
}

export default Main_Page;