import './style.css'


export default function Topo() {
  return (
    <header>
      <div className="container-topo limitar-secao">
        <img src="assets/logo.png"/>

        <nav className="navbar">
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  )
}