let valor_inicial = 0.01;
let contador = 1;

console.log(`Dia ${contador}: R$ ${valor_inicial}`);
while ( contador < 31 ) {
    
    var resultado = valor_inicial* 2;
    valor_inicial = resultado;

    contador++;
    console.log(`Dia ${contador}: R$ ${resultado} `);
}

