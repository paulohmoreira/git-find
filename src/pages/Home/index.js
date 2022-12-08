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

          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/16468584?v=4"
              alt="Foto de perfil"
              className="profile"
            />

            <div>
              <h2>Paulo Moreira</h2>
              <span>@paulohmoreira</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Repositórios</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
