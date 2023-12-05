document.addEventListener('DOMContentLoaded', function (){
    //função que carrega a lista de clientes ao entrar na pag
    loadClientesList();

    //Add um listener do formulario para add clientes
    document.getElementById('formAdicionarCliente').addEventListener('submit', function (event){
        event.preventDefault()
        adicionarCliente()
    })
})

function adicionarCliente() {
    const id_cliente = document.getElementById('idCliente').value
    const nome_cliente = document.getElementById('nomeCliente').value
    const endereco_cliente = document.getElementById('enderecoCliente').value
    const email_cliente = document.getElementById('emailCliente').value
    const telefone_cliente = document.getElementById('telefoneCliente').value

    fetch('http://localhost:3000/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_cliente: id,
            nome_cliente: nome,
            endereco_cliente: endereco,
            email_cliente: email,
            telefone_cliente: telefone
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        loadClientesList()
    })
    .catch(error => console.error("Erro:", error))
}

function loadClientesList() {
    fetch('http://localhost:3000/api/clientes')
        .then(response => response.json())
        .then(data => displayClientesList(data))
        .catch(error => console.error("Erro:", error))
}

function displayClientesList(data) {
    const listaClientes = document.getElementById('listaClientes')
    listaClientes.innerHTML = ''

    data.forEach(cliente =>{
        const listItem = document.createElement('li')
        listItem.textContent = `ID: ${cliente.id_cliente} - Nome: ${cliente.nome_cliente} - Endereço: ${cliente.endereco_cliente} - Email: ${cliente.email_cliente} - Telefone: ${cliente.telefone_cliente}`
        listaClientes.appendChild(listItem)
    })
}