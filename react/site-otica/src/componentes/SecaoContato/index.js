import './style.css';

export default function SecaoContato() {
  return (
    <section id="contato" className="secao-contato">
      <div className="limitar-secao">
        <h2>FALE CONOSCO</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através das nossas redes sociais ou da Central de Atendimento.</p>

        <div className="contato">
          
          <div className="contato-conteudo">
            <h3>Contato</h3>

            <div className="local">
            <img src="assets/local.png" />
              <span>Nova Iguaçu-RJ</span>
            </div>

            <div className="tel">
            <img src="assets/telefone.png" />
              <span>(85) 9 9704-6040</span>
            </div>

            <div className="email">
            <img src="assets/email.png" />
              <span>contato@oticavida.com</span>
            </div>

          </div>
          <div className="contato-conteudo">
            <h3>Nossas Redes Sociais</h3>

            <div className="fb">
              <img src="assets/fb.png" />
              <span>/OticaVida</span>
            </div>

            <div className="ig">
            <img src="assets/ig.png" />
              <span>@OticaVidaRJ</span>
            </div>

            <div className="tt">
            <img src="assets/tt.png" />
              <span>@OticaVidaRJ</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}