import { Header } from '../../components/Header';

import background from '../../assets/github.svg';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem de background" />
        <div className="info">
          <input name="usuario" placeholder="@username" />
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
