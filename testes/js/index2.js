// const produtos = [
//   { id: 1, nome: 'Açúcar', estoque: 100, valor: 2.00},
//   { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95},
//   { id: 3, nome: 'Luvas Descartáveis', estoque: 1000, valor: 2.50},
// ];

// function imprimirProduto (produto) {
//   console.log(produto.nome);
// }

// produtos.forEach(imprimirProduto);

const carrinho = [
  {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
  {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
  {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
];

function imprimirItem( produto, index ) {
  let texto = index + ' - ';
  texto += produto.qnt + ' UN - ';
  texto += produto.nome + ' - ';
  texto += 'R$ ' + produto.valor + ' - ';
  texto += 'R$ ' + produto.qnt * produto.valor;

  console.log( texto );
}

carrinho.forEach(imprimirItem);