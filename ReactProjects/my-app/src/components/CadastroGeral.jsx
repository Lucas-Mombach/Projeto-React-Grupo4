import './Cadastro.css'
import React from 'react';
import listaProdutos from '../data/mercadorias'
import listaTipos from '../data/tipos'
import Cadastro from './Cadastro';
import NovoTipo from './NovoTipo';
import Tabela from './Tabela'
export default props => {
    
    return (
        <div>
        <NovoTipo/>
        <Cadastro/>
        <Tabela/>
        </div>
    );
}