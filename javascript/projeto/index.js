import dados from 'readline-sync';

console.log("Aplicação de Juros:")

let valor = dados.question("\nInforme o valor devido: R$ ");
let dias = dados.question("Informe quantos dias em atraso: ");

let juros = (dias > 15)? 10:5;

let valor_cjuros = Number(valor) + (valor * (juros/100));

console.log("\nValor original da dívida: R$ " + valor + ",00");
console.log("Dias atrasados: " + dias + " dias");
console.log("Taxa de juros: " + juros + "%");
console.log("Valor total com juros: R$ " + valor_cjuros + ",00");