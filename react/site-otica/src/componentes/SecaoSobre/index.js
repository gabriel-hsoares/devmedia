import './style.css';

export default function SecaoSobre() {
  return (
    <section id="sobre" className="secao-sobre">
      <div className="quemsomos limitar-secao">
        <h3>QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
      
        <div className="elementos">
          
          <img src="assets/loja.png"/>

          <div className="card-1">
            <h4>NOSSAS FILIAIS</h4>
            <p>Hoje temos mais de 20 lojas espalhadas pelo Brasil.</p>
          </div>

          <div className="card-1">
            <h4>ATENDIMENTO FLEXÍVEL</h4>
            <p>Nossa equipe pronta pra te atender!</p>
          </div>
          
          <img src="assets/atendimento.png"/>

        </div>
      </div>
    </section>
  )
}