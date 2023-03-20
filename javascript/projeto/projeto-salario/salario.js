import entradaDados from 'readline-sync';

let dados_salario_minimo = [
  {ano: 2010, salario_minimo: 510.00},
  {ano: 2011, salario_minimo: 545.00},
  {ano: 2012, salario_minimo: 622.00},
  {ano: 2013, salario_minimo: 678.00},
  {ano: 2014, salario_minimo: 724.00},
  {ano: 2015, salario_minimo: 788.00},
  {ano: 2016, salario_minimo: 880.00},
  {ano: 2017, salario_minimo: 937.00},
  {ano: 2018, salario_minimo: 954.00},
  {ano: 2019, salario_minimo: 998.00},
  {ano: 2020, salario_minimo: 1045.00}
];

let dados_ipca = [
  {ano: 2010, inflacao: 5.91},
  {ano: 2011, inflacao: 6.50},
  {ano: 2012, inflacao: 5.84},
  {ano: 2013, inflacao: 5.91},
  {ano: 2014, inflacao: 6.41},
  {ano: 2015, inflacao: 10.67},
  {ano: 2016, inflacao: 6.29},
  {ano: 2017, inflacao: 2.95},
  {ano: 2018, inflacao: 3.75},
  {ano: 2019, inflacao: 4.31},
  {ano: 2020, inflacao: 4.52}
];

console.log("\nEscolha uma das alternativas");
console.log("\n1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e IPCA");

let opcao = entradaDados.question("\nDigite a opcao desejada: ");
opcao = Number(opcao);

let label_ano = `Ano`;
let label_salario = `Salário mínimo`;
let label_crescimento = `Crescimento salarial`;
let label_ipca = `Inflação IPCA`;

switch(opcao) {
  case 1:
    for (let salario of dados_salario_minimo) {
      let ano = salario.ano;
      let salMin = salario.salario_minimo;

      let salMinformatado = salMin.toFixed(2).replace('.',',');

      console.log(`\n${label_ano.padEnd(25,'.')} ${ano}`);
      console.log(`${label_salario.padEnd(25,'.')} R$ ${salMinformatado}`);
    }
    break;
  case 2:
    for (let inflacao of dados_ipca) {
      let ano = inflacao.ano;
      let ipca = inflacao.inflacao;
      
      let ipca_formatado = ipca.toFixed(2).replace('.',',');

      console.log(`\n${label_ano.padEnd(25, '.')} ${ano}`);
      console.log(`${label_ipca.padEnd(25, '.')} ${ipca_formatado}%`);
    }
    break;
  case 3:
    for (let index = 0; index <= dados_salario_minimo.length - 1; index++) {
      let ano = dados_salario_minimo[index].ano;
      let salMin = dados_salario_minimo[index].salario_minimo;
      let percentual_crescimento;
      let crescimentoFormatado;

      if (index > 0) {
        let salarioAnterior = dados_salario_minimo[index-1].salario_minimo;
        let diferenca = salMin - salarioAnterior;

        percentual_crescimento = (diferenca / salarioAnterior) * 100;
        crescimentoFormatado = percentual_crescimento.toFixed(2).replace('.',',');
      } else {
        crescimentoFormatado = `-`;
      }
      
      let ipca = dados_ipca[index].inflacao;

      let salMinformatado = salMin.toFixed(2).replace('.',',');
      let ipca_formatado = ipca.toFixed(2).replace('.',',');

      console.log(`\n${label_ano.padEnd(25, '.')}: ${ano}`);
      console.log(`${label_salario.padEnd(25, '.')}: R$ ${salMinformatado}`);
      console.log(`${label_crescimento.padEnd(25, '.')}: ${crescimentoFormatado}%`);
      console.log(`${label_ipca.padEnd(25, '.')}: ${ipca_formatado}%`);
    }
    break;
  default:
    console.log(`\nOpção inválida!`);
    break;
}