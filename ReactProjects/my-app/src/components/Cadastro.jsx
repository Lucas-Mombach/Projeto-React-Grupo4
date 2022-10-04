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
                                
                                <select id="tipo" onFocus={
                                    function(){
                                        let select = document.getElementById("tipo");
                                        
                                        for(let i = 1; i < select.options.length; i++) {
                                            select.remove(i);
                                        }

                                        for(let i = 0; i < listaTipos.length; i++) {
                                            document.getElementById("tipo").innerHTML += "<option value='" + i + "'>" + listaTipos[i].nomeTipo + "</option>";
                                        }
                                    }
                                }>
                                    <option selected disabled>Selecione o tipo</option>
                                </select>
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
                                        let produto = {
                                            nome: document.getElementById("nome").value,
                                            tipo: document.getElementById("tipo").value,
                                            dataDeFabricacao: document.getElementById("dataDeFabricacao").value,
                                            dataDeValidade: document.getElementById("dataDeValidade").value,
                                            peso: document.getElementById("peso").value,
                                            custoDeFabricacao: document.getElementById("custoDeFabricacao").value,
                                            precoDeVenda: document.getElementById("precoDeVenda").value,
                                            qtdeProduzida: document.getElementById("qtdeProduzida").value,
                                            qtdeVendida: document.getElementById("qtdeVendida").value,
                                            funcionario: document.getElementById("funcionario").value,
                                            lucro: document.getElementById("lucro").value
                                        };
                                        listaProdutos.push(produto);
                                        document.getElementById("nome").value = "";
                                        document.getElementById("tipo").value = "";
                                        document.getElementById("dataDeFabricacao").value = "";
                                        document.getElementById("dataDeValidade").value = "";
                                        document.getElementById("peso").value = "";
                                        document.getElementById("custoDeFabricacao").value = "";
                                        document.getElementById("precoDeVenda").value = "";
                                        document.getElementById("qtdeProduzida").value = "";
                                        document.getElementById("qtdeVendida").value = "";
                                        document.getElementById("funcionario").value = "";
                                        document.getElementById("lucro").value = "";
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