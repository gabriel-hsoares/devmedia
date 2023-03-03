import entrada from 'readline-sync';

let valor_produto = entrada.question("Digite o valor da compra: R$ ");
let parcelas = entrada.question("Digite a quantidade de parcelas: ");

for(let contador = 1; contador <= parcelas; contador++) {
    let valor_parcela = valor_produto / contador;

    console.log("N° de parcelas: " + parcelas + " parcelas. Valor da parcela: R$ " + valor_parcela.toFixed(2));
}