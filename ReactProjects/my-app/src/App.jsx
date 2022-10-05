//import './App.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Routes,Route } from  'react-router-dom'
import NovoTipo from './components/NovoTipo'
import Cadastro from './components/Cadastro'
import Tabela from './components/Tabela'
import Menu from './components/Menu'
import Home from './components/Home'
import Login from './components/Login'
import CadastroGeral from './components/CadastroGeral'
 
const App = props => (
    <div className="App">
        <h1> Padaria Victória</h1>
        <BrowserRouter> 
            <Menu/>
            <Login/>
            <Home />
            <CadastroGeral/>
            <Tabela/>
        </BrowserRouter>
    </div>
)
 
export default App