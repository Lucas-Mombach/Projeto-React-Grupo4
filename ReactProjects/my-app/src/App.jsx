//import './App.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Routes,Route } from  'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Login from './components/Login'
import CadastroGeral from './components/CadastroGeral'
 
const App = props => (
    <div className="App">
        <h1> Padaria Victória</h1>
        <Menu/>
        <BrowserRouter>
            <Routes>

                <Route path='/' element = {<Home />} />
                <Route path='/login' element = {<Login/>} />
                <Route path='/cadastro' element = {<CadastroGeral/>} />
            </Routes>
        </BrowserRouter>
    </div>
)
 
export default App