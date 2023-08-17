const produtos = [
  {id: 1, nome: 'Açúcar', estoque: 2},
  {id: 2, nome: 'Pão', estoque: 2},
  {id: 3, nome: 'Leite', estoque: 2}
];

function imprimirProduto(produto) {
  console.log(produto.nome);
}

produtos.forEach(imprimirProduto);

// Ou seja, o forEach vai percorrer os elementos do array