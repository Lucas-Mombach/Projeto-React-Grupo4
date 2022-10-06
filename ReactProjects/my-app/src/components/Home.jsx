import './Cadastro.css'
import React from 'react';
import listaProdutos from '../data/mercadorias'
import listaTipos from '../data/tipos'

export default props => {
    
    return (
        <div className="Home">
        <header>
          <h1>Padaria Victoria</h1>
          <p>
            Sistema de Gerenciamento de estoque de produtos da Padaria Victoria
          </p>
         <button type='button'>Login</button>
         
        </header>
      </div>
    );
}