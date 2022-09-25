import './Cadastro.css'
import React from 'react';
import listaProdutos from '../data/mercadorias'
import listaTipos from '../data/tipos'

export default props => {
    
    return (
        <div>
            <main>

                <div className="card-post" >

                    <h1>Cadastro de Produto</h1>
                    <div className="line-post" ></div>
                    
                    <div className="card-body-post" >

                        <form>

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" id="nome"/>
                            </div>

                            <div className="fields" >
                                <label>Tipo</label>
                                <input type="text" id="tipo"/>
                            </div>
                            
                            <div className="fields" >
                                <label>Data de Fabricação</label>
                                <input type="date" id="dataDeFabricacao"/>
                            </div>

                            <div className="fields" >
                                <label>Data de Validade</label>
                                <input type="date" id="dataDeValidade"/>
                            </div>

                            <div className="fields" >
                                <label>Peso</label>
                                <input type="text" id="peso"/>
                            </div>

                            <div className="fields" >
                                <label>Custo de Fabricação</label>
                                <input type="text" id="custoDeFabricacao"/>
                            </div>

                            <div className="fields" >
                                <label>Preço de Venda</label>
                                <input type="text" id="precoDeVenda"/>
                            </div>

                            <div className="fields" >
                                <label>Quantidade Produzida em um Dia</label>
                                <input type="text" id="qtdeProduzida"/>
                            </div>

                            <div className="fields" >
                                <label>Quantidade Vendida em um Dia</label>
                                <input type="text" id="qtdeVendida"/>
                            </div>

                            <div className="fields" >
                                <label>Funcionario Que Produziu</label>
                                <input type="text" id="funcionario"/>
                            </div>

                            <div className="fields" >
                                <label>Lucro</label>
                                <input type="text" id="lucro"/>
                            </div>

                            <div className="btn-post" >
                                <button type="button" onClick={
                                    function() {
                                        listaProdutos.push([
                                            document.getElementById("nome").value, 
                                            document.getElementById("tipo").value, 
                                            document.getElementById("dataDeFabricacao").value
                                        ]);
                                    }
                                }>Cadastrar</button>
                            </div>

                        </form>

                    </div>

                </div>
                
            </main>
        </div>
    );
}