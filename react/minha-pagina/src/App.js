import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>React JS</h2>
      </header>
      <main>
        <section className="secao-1">
          <h1>React JS</h1>
          <p>Biblioteca JavaScript para criar SPAs</p>
          <a href="https://reactjs.org/" target="_blank">Site Oficial</a>
        </section>
        <section className="secao-2">
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
        </section>
        <div className="cards">
          <div className="card">
            <h3>HTML</h3>
            <p>Apreder a estruturar os elementos da página com HTML</p>
          </div>
          <div className="card">
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
            <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
          </div>
        </div>
      </main>
      <footer>
        <p>Curso de introdução ao React JS</p>
      </footer>
    </div>
  );
}

export default App;