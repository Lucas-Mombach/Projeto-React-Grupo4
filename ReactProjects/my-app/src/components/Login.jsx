import './Cadastro.css'
import React from 'react';
import User from '../data/login'

export default props => {

    return (
        <div>
            <main>

                <div className="card-post" >

                    <h1>Login</h1>
                    <div className="line-post" ></div>
                    
                    <div className="card-body-post" >

                        <form>

                            <div className="fields" >
                                <label>Usuario</label>
                                <input type="text" id="username"/>
                            </div>

                            <div className="fields" >
                                <label>Senha</label>
                                <input type="password" id="password"/>
                            </div>

                            <div className="btn-post" >
                                <button type="button" onClick={
                                    function() {
                                        let user = {
                                            nomeTipo: document.getElementById("username").value,
                                            qtdeProdutos: document.getElementById("password").value,
                                        }
                                        User.push(user); 
                                        document.getElementById("username").value = "";
                                        document.getElementById("password").value = "";
                                    }
                                }><a href='/cadastro'>Confirmar</a></button>
                            </div>

                        </form>

                    </div>

                </div>
                
            </main>
        </div>
    );
}