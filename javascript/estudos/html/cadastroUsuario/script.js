function cadastrar() {
  let user = document.getElementById('login');
  let usuario = user.value
  let passw = document.getElementById('senha');
  let senha = passw.value
  alert(`Usuário cadastrado: ${usuario}\nSenha cadastrada: ${senha}`);
  // alert(`Senha cadastrada: ${senha}`)
}