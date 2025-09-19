const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let produtos = [
    {id:1, nome: "Teclado Gamer", preco: 150, categoria: "Periféricos"},
    {id:2, nome: "Monitor 24", preco: 900, categoria: "Monitores"},
    {id:3, nome: "Mouse", preco: 80, categoria: "Periféricos"},
    {id:4, nome: "Monitor DELL 32", preco: 1800, categoria: "Monitores"},
]

// metodo de buscar/ obter
app.get("/", (req, res) => {
    res.json({ok : true, mensagem: "API loja-Online"})
})

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(produto => produto.id === id);
    if(!produto) return res.status(404).json({erro: "Produto nao encontrado"})
    res.json(produto);
})
// metodo de postar/ adicionar
app.post("/produtos", (req, res) => {
    const id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    const novoProduto = { id, ...req.body };

    produtos.push(novoProduto);

    res.status(201).json({
        mensagem : "Produto cadastrado com sucesso",
        produto : novoProduto
    });
});
// metodo de excluir/ retirar
app.delete("/produtos", (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((p) => p.id === id )

    if(index === -1){
        return res.status(404).json({erro: "Produto não encontrado" });
    }

    const removido = produtos.splice(index, 1);
    res.json({
        mensagem: "Produto removido",
        produto: removido[0]
    })

})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na http://localhost:${PORT}`);
})
