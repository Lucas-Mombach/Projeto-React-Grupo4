import './Home.css'
import React from 'react';
export default props => {
    
    return (
        <div className="Home">
            <header>
            <h1>Padaria Victoria</h1>
            <p>
                Sistema de Gerenciamento de estoque de produtos da Padaria Victoria
            </p>
            <button type='button'><a href='/login'>Login</a></button>
            
            </header>
        </div>
    );
}