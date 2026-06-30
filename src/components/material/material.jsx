import './material.css'
import big from './big.png'
import middle from './middle.jpg'
import small from './small.jpg'

import Line from '../line';


let menulis

function Material() {
    
  return (
    <section>
        <div className='container about material'>
            <div className='material_left'>
                        <Line
                        width={530}
                        top={135}
                        text = {'MATERIAL'}
                        />
                    <div className='About_big_text width'>
                        <h1 className='big_black_text'>choice of materials for quality furniture.</h1>
                    </div>
                    <p className='gray_small'>
                        You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
                    </p>
                    <a href="#" className='but'>See Materials</a>

            </div>
            <div className='material_right'>
                <img src={big} className='material_big' alt="" />
                <img src={middle} className='material_middle' alt="" />
                
            </div>
              
        </div>
    </section>
    
  );
}

export default Material;
