const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');
server.use(express.json());
server.get('/', (req, res) => {
return res.json({mensagem: 'Nossa API está funcionando'});
});
server.listen(3000, () =>{
console.log("Servidor funcionando");
});


// Medicamento
// Create
medicamento.post("/medicamentos", (req, res) => {
    const novoMedicamento = req.body

    if(!novoMedicamento.id_medicamento || !novoMedicamento.nome_medicamento || !novoMedicamento.nome_fabricante || !novoMedicamento.preco || !novoMedicamento.quantidade){
        return res.status(400).json({mensagem: "Dados incompletos, tente novamente"})
    } else {
        dados.medicamento.push(novoMedicamento)
        
        salvarDados(dados)
        
        return res.status(201).json({mensagem: "Medicamento cadastrado com sucesso"})
    }
})

// Read
medicamento.get("/medicamentos", (req, res) => {
    return res.json(dados.medicamento)
})

// Update
medicamento.put("/medicamentos/:id_medicamento", (req, res) => {
    const medicamentoId = parseInt(req.params.id_medicamento)
    const atualizarMedicamento = req.body
    const idMedicamento = dados.users.findIndex(u => u.id_medicamento === medicamentoId)

    if(idMedicamento === -1){
        return res.status(404).json({mensagem: "Medicamento não encontrado :/"})
    } else {
        dados.medicamento[idMedicamento].nome_medicamento = atualizarMedicamento.nome_medicamento || dados.Medicamento[idMedicamento].nome_medicamento
        dados.medicamento[idMedicamento].nome_fabricante = atualizarMedicamento.nome_fabricante || dados.Medicamento[idMedicamento].nome_fabricante
        dados.medicamento[idMedicamento].preco = atualizarMedicamento.preco || dados.Medicamento[idMedicamento].preco
        dados.medicamento[idMedicamento].quantidade = atualizarMedicamento.quantidade || dados.Medicamento[idMedicamento].quantidade

        salvarDados(dados)

        return res.json({mensagem: "Medicamento atualizado"})
    }
})

// Delete
medicamento.delete("/medicamentos/:id_medicamento", (req, res) => {
    const medicamentoId = parseInt(req.params.id_medicamento)

    dados.medicamento = dados.medicamento.filter(u => u.id_medicamento !== medicamentoID)

    salvarDados(dados)

    return res.status(200).json({mensagem: "Medicamento excluído"})
})

function salvarDados(){
    fs.writeFileSync(__dirname + "/data/dados.json", JSON.stringify(dados, null, 2))
}

// Cliente
// Create
cliente.post("/clientes", (req, res) => {
    const novoCliente = req.body

    if(!novoCliente.id_cliente || !novoCliente.nome_cliente || !novoCliente.endereco_cliente || !novoCliente.email_cliente || !novoCliente.telefone_cliente){
        return res.status(400).json({mensagem: "Dados incompletos, tente novamente"})
    } else {
        dados.Cliente.push(novoCliente)
        
        salvarDados(dados)
        
        return res.status(201).json({mensagem: "Cliente cadastrado com sucesso"})
    }
})

// Read
cliente.get("/clientes", (req, res) => {
    return res.json(dados.Cliente)
})

// Update
cliente.put("/clientes/:id_cliente", (req, res) => {
    const clienteId = parseInt(req.params.id_cliente)
    const atualizarCliente = req.body
    const idCliente = dados.users.findIndex(u => u.id_cliente === clienteId)

    if(idCliente === -1){
        return res.status(404).json({mensagem: "Cliente não encontrado :/"})
    } else {
        dados.cliente[idCliente].nome_cliente = atualizarCliente.nome_cliente || dados.cliente[idCliente].nome_cliente
        dados.cliente[idCliente].endereco_cliente = atualizarCliente.endereco_cliente || dados.cliente[idCliente].endereco_cliente
        dados.cliente[idCliente].email_cliente = atualizarCliente.email_cliente || dados.cliente[idCliente].email_cliente
        dados.cliente[idCliente].telefone_cliente = atualizarCliente.telefone_cliente || dados.cliente[idCliente].telefone_cliente

        salvarDados(dados)

        return res.json({mensagem: "Cliente atualizado"})
    }
})

// Delete
cliente.delete("/clientes/:id_cliente", (req, res) => {
    const clienteId = parseInt(req.params.id_cliente)

    dados.cliente = dados.cliente.filter(u => u.id_cliente !== clienteId)

    salvarDados(dados)

    return res.status(200).json({mensagem: "Cliente excluído"})

})

function salvarDados(){
    fs.writeFileSync(__dirname + "/data/dados.json", JSON.stringify(dados, null, 2))
}

// Fornecedor
// Create
fornecedor.post("/fornecedores", (req, res) => {
    const novoFornecedor = req.body

    if(!novoFornecedor.id_fornecedor || !novoFornecedor.nome_fornecedor || !novoFornecedor.endereco_fornecedor || !novoFornecedor.telefone_fornecedor){
        return res.status(400).json({mensagem: "Dados incompletos, tente novamente"})
    } else {
        dados.fornecedor.push(novoFornecedor)
        
        salvarDados(dados)
        
        return res.status(201).json({mensagem: "Fornecedor cadastrado com sucesso"})
    }
})

// Read
fornecedor.get("/forncedores", (req, res) => {
    return res.json(dados.fornecedor)
})

// Update
fornecedor.put("/fornecedores/:id_fornecedor", (req, res) => {
    const fornecedorId = parseInt(req.params.id_fornecedor)
    const atualizarFornecedor = req.body
    const idFornecedor = dados.users.findIndex(u => u.id_fornecedor === fornecedorId)

    if(idFornecedor === -1){
        return res.status(404).json({mensagem: "Fornecedor não encontrado :/"})
    } else {
        dados.fornecedor[idFornecedor].nome_fornecedor = atualizarFornecedor.nome_fornecedor || dados.fornecedor[idFornecedor].nome_fornecedor
        dados.fornecedor[idFornecedor].endereco_fornecedor = atualizarFornecedor.endereco_fornecedor || dados.fornecedor[idFornecedor].endereco_fornecedor
        dados.fornecedor[idFornecedor].telefone_fornecedor = atualizarFornecedor.telefone_fornecedor || dados.fornecedor[idFornecedor].telefone_fornecedor

        salvarDados(dados)

        return res.json({mensagem: "Fornecedor atualizado"})
    }
})

// Delete
fornecedor.delete("/fornecedores/:id_fornecedor", (req, res) => {
    const fornecedorId = parseInt(req.params.id_fornecedor)

    dados.fornecedor = dados.fornecedor.filter(u => u.id_fornecedor !== fornecedorId)

    salvarDados(dados)

    return res.status(200).json({mensagem: "Fornecedor excluído"})
})

function salvarDados(){
    fs.writeFileSync(__dirname + "/data/dados.json", JSON.stringify(dados, null, 2))
}

// Venda
// Create
venda.post("/vendas", (req, res) => {
    const novaVenda = req.body

    if(!novaVenda.id_venda || !novaVenda.data || !novaVenda.id_medicamento || !novoFornecedor.id_cliente){
        return res.status(400).json({mensagem: "Dados incompletos, tente novamente"})
    } else {
        dados.venda.push(novaVenda)
        
        salvarDados(dados)
        
        return res.status(201).json({mensagem: "Venda cadastrada com sucesso"})
    }
})

// Read
venda.get("/vendas", (req, res) => {
    return res.json(dados.fornecedor)
})

// Update
venda.put("/vendas/:id_venda", (req, res) => {
    const vendaId = parseInt(req.params.id_venda)
    const atualizarVenda = req.body
    const idVenda = dados.users.findIndex(u => u.id_venda === vendaId)

    if(idVenda === -1){
        return res.status(404).json({mensagem: "Venda não encontrada :/"})
    } else {
        dados.venda[idVenda].id_venda = atualizarVenda.id_venda || dados.venda[idVenda].id_venda
        dados.venda[idVenda].data = atualizarVenda.data || dados.venda[idVenda].data
        dados.venda[idVenda].id_medicamento = atualizarVenda.id_medicamento || dados.venda[idVenda].id_medicamento
        dados.venda[idVenda].id_cliente = atualizarVenda.id_cliente || dados.venda[idVenda].id_cliente

        salvarDados(dados)

        return res.json({mensagem: "Venda atualizada"})
    }
})

// Delete
venda.delete("/vendas/:id_venda", (req, res) => {
    const vendaId = parseInt(req.params.id_venda)

    dados.venda = dados.venda.filter(u => u.id_venda !== vendaId)

    salvarDados(dados)

    return res.status(200).json({mensagem: "Venda excluída"})
})

function salvarDados(){
    fs.writeFileSync(__dirname + "/data/dados.json", JSON.stringify(dados, null, 2))
}