const produtosCadastrados = [
  {id: 1, nome: 'Açúcar', estoque: 100},
  {id: 2, nome: 'Suco', estoque: 100},
  {id: 3, nome: 'Hamburguer', estoque: 100}
];

function retornaProduto(produto) {
  const produtoExibicao = {
    nome: produto.nome,
    valor: produto.estoque
  }

  return produtoExibicao;
}

const produtoExibicao = produtosCadastrados.map(retornaProduto);

console.log(produtoExibicao);

// O map nos permite que criemos um novo array a partir do array existente