import './Cadastro.css'
import React from 'react';
import listaTipos from '../data/tipos'

export default props => {

    return (
        <div>
            <main>

                <div className="card-post" >

                    <h1>Criar Tipo</h1>
                    <div className="line-post" ></div>
                    
                    <div className="card-body-post" >

                        <form>

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" id="nomeTipo"/>
                            </div>

                            <div className="fields" >
                                <label>Quantidade de Produtos</label>
                                <input type="text" id="qtdeProdutos"/>
                            </div>

                            <div className="btn-post" >
                                <button type="button" onClick={
                                    function() {
                                        let tipo = {
                                            nomeTipo: document.getElementById("nomeTipo").value,
                                            qtdeProdutos: document.getElementById("qtdeProdutos").value,
                                        }
                                        listaTipos.push(tipo); 
                                        document.getElementById("nomeTipo").value = "";
                                        document.getElementById("qtdeProdutos").value = "";
                                    }
                                }>Criar</button>
                            </div>

                        </form>

                    </div>

                </div>
                
            </main>
        </div>
    );
}