document.addEventListener('DOMContentLoaded', function (){
    //função que carrega a lista de vendas ao entrar na pag
    loadVendasList();

    //Add um listener do formulario para add vendas
    document.getElementById('formAdicionarVenda').addEventListener('submit', function (event){
        event.preventDefault()
        adicionarVenda()
    })
})

function adicionarVenda() {
    const id_venda = document.getElementById('idVenda').value
    const data = document.getElementById('data').value
    const id_medicamento = document.getElementById('idMedicamento').value
    const id_cliente = document.getElementById('idCliente').value

    fetch('http://localhost:3000/Drogaria/vendas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_venda: id_venda,
            data: data,
            id_medicamento: id_medicamento,
            id_cliente: id_cliente
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        loadVendasList()
    })
    .catch(error => console.error("Erro:", error))
}

function loadVendasList() {
    fetch('http://localhost:3000/Drogaria/vendas')
        .then(response => response.json())
        .then(data => displayVendasList(data))
        .catch(error => console.error("Erro:", error))
}

function displayVendasList(data) {
    const listaVendas = document.getElementById('listaVendas')
    listaVendas.innerHTML = ''

    data.forEach(venda =>{
        const listItem = document.createElement('li')
        listItem.textContent = `ID: ${venda.id_venda} - Data: ${venda.data} - ID Medicamento: ${venda.id_medicamento} - ID Cliente: ${venda.id_cliente}`
        listaVendas.appendChild(listItem)
    })
}