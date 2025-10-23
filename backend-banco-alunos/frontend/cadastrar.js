const API = "http://localhost:3000/alunos";

const inputNome = document.getElementById("nome");
const inputCpf = document.getElementById("cpf");
const inputCep = document.getElementById("cep");
const inputUf = document.getElementById("uf");
const inputRua = document.getElementById("rua");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");
const formAluno = document.getElementById("form-aluno");

async function salvar(e) {
    e.preventDefault();
    console.log("Salvando aluno");

    const nome = inputNome.value.trim();
    const cpf = inputCpf.value.trim();
    const cep = inputCep.value.trim();
    const uf = inputUf.value.trim();
    const rua = inputRua.value.trim();
    const numero = parseInt(inputNumero.value.trim()) || null;
    const complemento = inputComplemento.value.trim();

    const novoAluno = { nome, cpf, cep, uf, rua, numero, complemento };

    try {
        const requisicao = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoAluno)
        });

        if (requisicao.status === 201) {
            const resultado = await requisicao.json();
            console.log("Aluno salvo:", resultado);
        } else {
            console.error("Erro na requisição:", requisicao.status);
        }
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }

   // carregarTabela();
}

//formAluno.addEventListener("submit", salvar);