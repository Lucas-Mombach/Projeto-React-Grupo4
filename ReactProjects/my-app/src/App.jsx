//import './App.css'
import ReactDOM from 'react-dom'
import React from 'react'
import NovoTipo from './components/NovoTipo'
import Cadastro from './components/Cadastro'
import Tabela from './components/Tabela'

export default _ =>

    <div className="App">
        <h1>Padaria Victoria</h1>

        <NovoTipo />
        <Cadastro />
        <Tabela />

    </div>