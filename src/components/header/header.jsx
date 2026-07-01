import './header.css'
import { menu } from './menu_list';
import logo from '../header/logo.png'
import Button from './button';
import { useState } from 'react';

let menulis

function Header() {
    
  return (
    <section>
        <header>
        <img src={logo} alt="" />
        <div className='menu'>
            {menulis = menu.map(men =>
                 <a href="#" className='menu-item'>{men.item}</a>
            
            )}
            <Button
            text = {'Contact Us'}
            
            />
            
        </div>
      
    </header>
    </section>
    
  );
}

export default Header;
