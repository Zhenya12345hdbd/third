import { middle } from "./promo_middle_data";
import Promo_middle_item from "./promo_middle_item";

let midl

function Promo_middle_all(ert) {
    
  return (
   
                <div className='promo_middle' style={{position:ert.position}}>
                {midl = middle.map(med =>
                    
                <Promo_middle_item
                        big_text={med.big_text}
                        small_text={med.small_text}
                />
                )}
            </div>
           
  );
}

export default Promo_middle_all;
