document.addEventListener('DOMContentLoaded', function (){
    //função que carrega a lista de medicamentos ao entrar na pag
    loadMedicamentosList();

    //Add um listener do formulario para add medicamentos
    document.getElementById('formAdicionarMedicamento').addEventListener('submit', function (event){
        event.preventDefault()
        adicionarCliente()
    })
})

function adicionarCliente() {
    const id_medicamento = document.getElementById('idMedicamento').value
    const nome_medicamento = document.getElementById('nomeMedicamento').value
    const nome_fabricante = document.getElementById('nomeFabricante').value
    const quantidade = document.getElementById('quantidade').value

    fetch('http://localhost:3000/Drogaria/medicamentos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_medicamento: id_medicamento,
            nome_medicamento: nome_medicamento,
            nome_fabricante: nome_fabricante,
            quantidade: quantidade
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        loadMedicamentosList()
    })
    .catch(error => console.error("Erro:", error))
}

function loadMedicamentosList() {
    fetch('http://localhost:3000/Drogaria/medicamentos')
        .then(response => response.json())
        .then(data => displayMedicamentosList(data))
        .catch(error => console.error("Erro:", error))
}

function displayClientesList(data) {
    const listaMedicamentos = document.getElementById('listaMedicamentos')
    listaMedicamentos.innerHTML = ''

    data.forEach(medicamento =>{
        const listItem = document.createElement('li')
        listItem.textContent = `ID: ${medicamento.id_medicamento} - Nome: ${medicamento.nome_medicamento} - Fabricante: ${medicamento.nome_fabricante} - Quantidade: ${medicamento.quantidade}`
        listaMedicamentos.appendChild(listItem)
    })
}