// Função com parâmetro
import entradaDados from 'readline-sync';

let nome = entradaDados.question("Digite o seu nome: ");
let n1 = entradaDados.question("Digite sua nota da N1: ");
let n2 = entradaDados.question("Digite sua nota da N2: ");


function retorna_status_aluno() {
  let media = (n1 * 2) + (n2 * 3) / 5;
  let status;

  if (media >= 5) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  return status;
}

let status_aluno = retorna_status_aluno(n1,n2);

console.log(`O aluno ${nome} está ${status_aluno}`);