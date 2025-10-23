console.log("app.js funcionando");

const API = "http://localhost:3000/alunos"; // Defina a URL da API

let alunos = [
    {
        "id": 1,
        "nome": "Vitor Lima",
        "cpf": "12345678910",
        "cep": "06000000",
        "uf": "SP",
        "rua": "Rua Senai",
        "numero": 123,
        "complemento": "APTO 12",
        "create_at": "2025-09-16T11:59:30.000Z",
        "update_at": "2025-09-16T11:59:30.000Z"
    },
    {
        "id": 2,
        "nome": "Wendel ",
        "cpf": "98765432100",
        "cep": "06000001",
        "uf": "SP",
        "rua": "Avenida Central",
        "numero": 123,
        "complemento": null,
        "create_at": "2025-09-16T11:59:30.000Z",
        "update_at": "2025-09-16T11:59:30.000Z"
    },
    {
        "id": 3,
        "nome": "Matheus",
        "cpf": "45678912399",
        "cep": "06000002",
        "uf": "SP",
        "rua": "Rua Nova",
        "numero": 123,
        "complemento": "Casa 1",
        "create_at": "2025-09-16T11:59:30.000Z",
        "update_at": "2025-09-16T11:59:30.000Z"
    }
];

async function carregarTabela() {
    try {
        const resposta = await fetch(API);
        const dados = await resposta.json();
        alunos = dados; // Atualiza lista local com a API
    } catch (error) {
        console.error(error.message);
    }

    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "<tr><td colspan='10'>Carregando...</td></tr>";

    tbody.innerHTML = alunos.map(a =>
        `<tr>
            <td>${a.id}</td>
            <td>${a.nome}</td>
            <td>${a.cpf}</td>
            <td>${a.cep}</td>
            <td>${a.uf}</td>
            <td>${a.rua}</td>
            <td>${a.numero}</td>
            <td>${a.complemento ?? ""}</td>
            <td>
                <button><a href="editar.html">Editar</a></button>
                <button><a href="excluir.html">Excluir</a>/button>
            <td>
        </tr>`
    ).join("");
}


carregarTabela();
