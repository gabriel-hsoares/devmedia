// Responsável por preparar o express e o tornar utilizável dentro da nossa aplicação
// Primeiro importamos os módulos do express
const express = require('express');
// Em seguida criamos a variável app, ela contém as funcionalidades do express.
const app = express();


// Utilizamos a função get contida na variável app
// A função get recebe uma requisição do front-end e devolve uma resposta para o mesmo
// O back-end se conecta com o front-end através do método get
// A função get recebe 2 parâmetros, o primeiro se refere à URL requisitada pelo front-end e o segundo é uma função com dois sub parâmetros (req = requisição) e (res = resposta)
// Req contém os dados enviados na requisição
// Res trata a resposta para o front-end. Na linha 5 usamos o método send para enviar o texto "Hello World"
app.get('/', (req, res) => {
  let mensagem = { mensagem: "Gabriel esteve aqui"}
  res.json(mensagem);
});

// app.listen(8080, () => {
//   console.log('Servidor rodando na porta: 8080');
// });

// A função listen faz nossa aplicação monitorar as requisições através de uma porta HTTP
// Possui 2 parâmetros, sendo o primeiro a porta que o servidor ficará monitorando as requisições e o segundo é uma função que será executada quando iniciarmos a aplicação
app.listen(8080, () => {
  let data = new Date();
  console.log('Servidor node iniciado em: ' + data);
});


// console.log('A aplicação será encerrada após esta linha')