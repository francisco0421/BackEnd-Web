document.addEventListener('DOMContentLoaded', function (){
    //função que carrega a lista de fornecedores ao entrar na pag
    loadFornecedoresList();

    //Add um listener do formulario para add fornecedores
    document.getElementById('formAdicionarFornecedor').addEventListener('submit', function (event){
        event.preventDefault()
        adicionarFornecedor()
    })
})

function adicionarFornecedor() {
    const id_fornecedor = document.getElementById('idFornecedor').value
    const nome_fornecedor = document.getElementById('nomeFornecedor').value
    const endereco_fornecedor = document.getElementById('enderecoFornecedor').value
    const telefone_fornecedor = document.getElementById('telefoneFornecedor').value

    fetch('http://localhost:3000/Drogaria/fornecedores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_fornecedor: id_fornecedor,
            nome_fornecedor: nome_fornecedor,
            endereco_fornecedor: endereco_fornecedor,
            telefone_fornecedor: telefone_fornecedor
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        loadFornecedoresList()
    })
    .catch(error => console.error("Erro:", error))
}

function loadFornecedoresList() {
    fetch('http://localhost:3000/Drogaria/fornecedores')
        .then(response => response.json())
        .then(data => displayFornecedoresList(data))
        .catch(error => console.error("Erro:", error))
}

function displayFornecedoresList(data) {
    const listaFornecedores = document.getElementById('listaFornecedores')
    listaFornecedores.innerHTML = ''

    data.forEach(fornecedor =>{
        const listItem = document.createElement('li')
        listItem.textContent = `ID: ${fornecedor.id_fornecedor} - Nome: ${fornecedor.nome_fornecedor} - Endereço: ${fornecedor.endereco_fornecedor} - Telefone: ${fornecedor.telefone_fornecedor}`
        listaFornecedores.appendChild(listItem)
    })
}