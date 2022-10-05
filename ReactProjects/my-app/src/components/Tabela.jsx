import './Tabela.css';
import React from 'react';
import listaProdutos from '../data/mercadorias'

export default props => {

    function fillTable(){
        var bodyRef = document.getElementById('table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';

                    let tbody = document.getElementById("tbody");

                    for (let i = 0; i < listaProdutos.length; i++) {
                        let tr = tbody.insertRow();
                        let td_id = tr.insertCell();
                        let td_nome = tr.insertCell();
                        let td_tipo = tr.insertCell();
                        let td_dataDeFabricacao = tr.insertCell();
                        let td_dataDeValidade = tr.insertCell();
                        let td_peso = tr.insertCell();
                        let td_custoDeFabricacao = tr.insertCell();
                        let td_precoDeVenda = tr.insertCell();
                        let td_qtdeProduzida = tr.insertCell();
                        let td_qtdeVendida = tr.insertCell();
                        let td_funcionario = tr.insertCell();
                        let td_lucro = tr.insertCell();

                        td_id.innerText = i;
                        td_nome.innerText = listaProdutos[i].nome;
                        td_tipo.innerText = listaProdutos[i].tipo;
                        td_dataDeFabricacao.innerText = listaProdutos[i].dataDeFabricacao;
                        td_dataDeValidade.innerText = listaProdutos[i].dataDeValidade;
                        td_peso.innerText = listaProdutos[i].peso;
                        td_custoDeFabricacao.innerText = listaProdutos[i].custoDeFabricacao;
                        td_precoDeVenda.innerText = listaProdutos[i].precoDeVenda;
                        td_qtdeProduzida.innerText = listaProdutos[i].qtdeProduzida;
                        td_qtdeVendida.innerText = listaProdutos[i].qtdeVendida;
                        td_funcionario.innerText = listaProdutos[i].funcionario;
                        td_lucro.innerText = listaProdutos[i].lucro;
                    }
    }

    return (
        <div className="TabelaProdutos">
            <hr />
            <button onClick={ function() { fillTable(); } }>Atualizar Tabela</button>
            
            <div className="Delete">
                <input type="number" id="inputDelete" />
                <button id="btnDelete" onClick={
                    function() {
                        let id = document.getElementById("inputDelete").value;

                        if(id >=0 && id<listaProdutos.length) {
                            listaProdutos.splice(id, 1);
                        }
                        document.getElementById("inputDelete").value="";
                        fillTable();
                    }
                }>Delete</button>
            </div>

            <table id="table" border="1">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Data de Fabricação</th>
                    <th>Data de Validade</th>
                    <th>Peso</th>
                    <th>Custo de Fabricação</th>
                    <th>Preço de Venda</th>
                    <th>Qtde Prduzida/Dia</th>
                    <th>Qtde Vendida/Dia</th>
                    <th>Funcionário</th>
                    <th>Lucro</th>
                </thead>
                <tbody id="tbody" />
            </table>
            
        </div>
    );
}
