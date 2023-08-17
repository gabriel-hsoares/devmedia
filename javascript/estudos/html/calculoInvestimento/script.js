import entradaDados from 'readline-sync'

console.log('\n--------- CALCULADORA DE JUROS COMPOSTOS ---------')
var nome = entradaDados.question('\nOla, seja bem-vindo! Digite o seu nome: ')
var salario = entradaDados.question('Digite o valor do seu salario: R$ ')
var percentualInvestir = entradaDados.question('Digite o percentual a ser investido: ')

var valorInvestir = (Number(salario) * Number(percentualInvestir)) / 100

var tempo = Number(entradaDados.question('Digite o tempo de aplicacao em meses: '))
var taxa = Number(entradaDados.question('Digite a taxa mensal: '))
var valorTotal = 0

var valorInvestido = valorInvestir * tempo

console.log('\n')

for (let i = 1; i <= tempo; i++) {
  valorTotal += valorInvestir + valorTotal * (taxa/100) 
  console.log(`Total acumulado no mes ${i}: R$ ${valorTotal.toFixed(2)}`)
}

var totalJuros = valorTotal - valorInvestido

console.log('------------------')
console.log(`\nPrezado ${nome}, segue abaixo a simulacao dos seus investimentos:\n`)
console.log(`Contribuicao mensal: R$ ${valorInvestir.toFixed(2)}`)
console.log(`Período de contribuicao: ${tempo} meses`)
console.log(`Taxa: ${taxa.toFixed(2)}% a.m.`)
console.log(`Total investido: R$ ${valorInvestido.toFixed(2)}`)
console.log(`Total em juros: R$ ${totalJuros.toFixed(2)}\n`)
console.log(`Valor total acumulado: R$ ${valorTotal.toFixed(2)}\n`)