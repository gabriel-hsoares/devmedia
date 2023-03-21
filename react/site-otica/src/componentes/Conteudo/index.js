import SecaoCapa from '../SecaoCapa/';
import SecaoProdutos from '../SecaoProdutos/';
import SecaoSobre from '../SecaoSobre/';
import SecaoContato from '../SecaoContato/'
import Rodape from '../Rodape/'

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
      <Rodape />
    </main>
  );
}