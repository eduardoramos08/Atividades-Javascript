console.log("app.js funcionando");

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
    "complemento": "",
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
  },

]
const API = 'http://localhost:3000/alunos'

async function carregarTabela() {

  try {
    const resposta = await fetch(API)
    const ALUNOS = await resposta.json()
    console.log(ALUNOS)

    // console.log(resposta.json())
    const tbody = document.getElementById("tbody")

    tbody.innerHTML = "<tr><td colspan='10'>Carregando...</td></tr>"
    tbody.innerHTML = "";
    tbody.innerHTML = "<tr><td colspan='10'>Carregando...</td></tr>";

    tbody.innerHTML = ALUNOS.map(a =>
      `<tr>
      <td>${a.id}</td>
      <td>${a.nome}</td>
      <td>${a.cpf}</td>
      <td>${a.cep}</td>
      <td>${a.uf}</td>
      <td>${a.rua}</td>
      <td>${a.numero}</td>
      <td>${a.complemento}</td>
      <td> <button>Editar</button> <button>Excluir</button></td>
  </tr>`
    ).join("");



  } catch (error) {
    console.error(error.message)

  }




  // setTimeout(() => {

  // }, 2000) // 5 segundos
}



carregarTabela();