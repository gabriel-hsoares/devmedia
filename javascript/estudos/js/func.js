const carrinho = [
  { nome: 'Mario', qtd: 1, valor: 250},
  { nome: 'Mario', qtd: 1, valor: 250},
  { nome: 'Mario', qtd: 1, valor: 250},
  { nome: 'Mario', qtd: 1, valor: 250}
];

carrinho.forEach(function(produto,index){
  let texto = index + ' - ';
  texto += produto.qtd + ' UN - ';
  texto += produto.nome + ' - ';
  texto += 'R$ ' + produto.valor + ' - ';
  texto += 'R$ ' + produto.qtd * produto.valor;

  console.log(texto);
})