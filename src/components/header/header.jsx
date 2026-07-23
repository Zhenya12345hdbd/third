import './header.css'
import { menu } from './menu_list';
import logo from '../header/logo.png'
import Button from './button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

let menulis

function Header() {
    
  return (
    <section>
        <header>
        <Link to="/"><img src={logo} alt="" /></Link>
        <Link to="/Admin">admin</Link>
        <div className='menu'>
            {menulis = menu.map(men =>
                 <NavLink to={men.path} className='menu-item'>{men.item}</NavLink>
            
            )}
              <Link to="/Contact">
               <Button
                  text = {'Contact Us'}
                
                />

              </Link>
               
            
        </div>
      
    </header>
    </section>
    
  );
}

export default Header;
