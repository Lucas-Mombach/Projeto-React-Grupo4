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
                                <input type="text" id="nome"/>
                            </div>

                            <div className="fields" >
                                <label>Quantidade de Produtos</label>
                                <input type="text" id="qtde"/>
                            </div>

                            <div className="btn-post" >
                                <button type="button" onClick={
                                    function() {
                                        listaTipos.push(
                                            [document.getElementById("nome").value, document.getElementById("qtde").value]
                                        ); 
                                        document.getElementById("nome").value = "";
                                        document.getElementById("qtde").value = "";
                                        console.log(listaTipos);
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