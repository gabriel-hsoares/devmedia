// Arrow function + função com parâmetro

import entradaDados from 'readline-sync';

// usuário digita o nome, a nota da N1 e a nota da N2
let nome = entradaDados.question("digite seu nome: ");
let n1 = entradaDados.question("digite a nota da n1: ");
let n2 = entradaDados.question("digite a nota da n2: ");

// função com parâmetro para retornar o status do aluno
function retorna_status_aluno(n1, n2) {
  // cria a variável media
  let media = ((n1 * 2) + (n2 * 3)) / 5;
  // cria a variável status vazia
  let status;

  // verifica se a média é maior ou igual a 5
  if (media >= 5) {
    // se sim, a variável status recebe o valor "aprovado"
    status = "aprovado";
  } else {
    // se não, a variável status recebe o valor "reprovado"
    status = "reprovado";
  }

  // retorna o conteúdo da variável status
  return status;
}

// arrow function para retornar a média do aluno - 1ª possibilidade
const retorna_media =(n1, n2) => {
  // cria a variável média a partir da N1 e N2
  let media = ((n1 * 2) + (n2 * 3)) / 5;

  // retorna o valor armazenado na variável media
  return media;
}

// arrow function 2ª possibilidade
// const retorna_media = (n1,n2) => {
//   return ((n1 * 2) + (n2 * 3)) / 5;
// }

// arrow function 3ª possibilidade (apenas 1 linha de código)
// const retorna_media = (n1,n2) => ((n1 * 2) + (n2 * 3)) / 5;

// variável que armazena o retorno da fução retorna_status_aluno
let status_aluno = retorna_status_aluno(n1,n2);
// variável que armazena o retorno da função retorna_media
let media_aluno = retorna_media(n1,n2);

// exibe no terminal
console.log(`\nAluno: ${nome}
Média: ${media_aluno.toFixed(2)}
Status: ${status_aluno}`);