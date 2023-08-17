import entradaDados from 'readline-sync'

let contas = [
  {id: 1, nome: "Bruna Lobo", saldo: 21231},
  {id: 2, nome: "Enrico Souza", saldo: 102123},
  {id: 3, nome: "Gabriel Soares", saldo: 221231}
];

let id = Number(entradaDados.question('Digite o id da conta: '))
let nome = entradaDados.question('Digite o nome do correntista')
let saldo = Number(entradaDados.question('Digite o saldo'))

let novaConta = {id: id, nome: nome, saldo: saldo}
console.log(`Array antes da inclusao: `)
console.log(contas)
contas.push(novaConta)
console.log(`Array depois da inclusao: `)
console.log(contas)

// console.log('\n----- CONSULTA EXTRATO -----')

// console.log('Digite 1 para Bruna Lobo')
// console.log('Digite 2 para Enrico Souza')
// console.log('Digite 3 para Gabriel Soares')
// let escolha = Number(entradaDados.question('Digite o valor para consultar o extrato: '))

// switch(escolha) {
//   case 1:
//     console.log(`O saldo de ${contas[escolha - 1].nome} é igual a R$ ${contas[escolha - 1].saldo} `)
//     break;
//   case 2:
//     console.log(`O saldo de ${contas[escolha - 1].nome} é igual a R$ ${contas[escolha - 1].saldo} `)
//     break;
//   case 3:
//     console.log(`O saldo de ${contas[escolha - 1].nome} é igual a R$ ${contas[escolha - 1].saldo} `)
//     break;
//   default:
//     console.log('Valor não cadastrado na base de dados')
// }