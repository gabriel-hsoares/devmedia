// A função filter é utilizada para filtrar os elementos de um array e criar um novo array com apenas os elementos que atendem à uma condição

const produtos = [
  {id: 1, nome: 'Açúcar', estoque: 2, ativo: false},
  {id: 2, nome: 'Pão', estoque: 3, ativo: true},
  {id: 3, nome: 'Leite', estoque: 2, ativo: true}
];

function verificaProdutoAtivo (produto) {
  return produto.estoque > 2;
};

const produtosAtivos = produtos.filter(verificaProdutoAtivo);

console.log(produtosAtivos)