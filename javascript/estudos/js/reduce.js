// A função nativa (método) reduce é utilizada para reduzir um array a um único valor. Esse valor reduzido pode ser um número, uma string, um array ou um objeto.

const jogos = [
  {id: 1, nome: 'Galaxian', anoLancamento: 1979},
  {id: 2, nome: 'Donkey Kong', anoLancamento: 1981},
  {id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981},
  {id: 4, nome: 'AStroids', anoLancamento: 1979}
];

function retornaNomeJogos(nomes, jogo) {
  return nomes + jogo.nome + ', '
}

const nomesJogos = jogos.reduce(retornaNomeJogos, '');

console.log(nomesJogos.slice(0, -2));