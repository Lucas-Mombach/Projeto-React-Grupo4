import './Menu.css'
import React from 'react';
import {Link} from 'react-router-dom'

export default props => {
    
    return (
        <div className='Menu'>
          <nav> 
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Login</a></li>
              <li><a href='/'>Cadastros</a></li>
              <li><a href='/'>Produtos</a></li>
            </ul>
          </nav>
          
        </div>
    );
}