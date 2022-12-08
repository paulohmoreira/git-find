import { useState } from 'react';

import { Header } from '../../components/Header';
import ItemList from '../../components/ItemList';

import background from '../../assets/github.svg';

import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser;
      setCurrentUser({ avatar_url, name, login, bio });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem de background" />

        <div className="info">
          <input
            name="usuario"
            placeholder="@username"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <button onClick={handleGetData}>Buscar</button>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url} alt="Foto de perfil" className="profile" />

                <div>
                  <h2>{currentUser.name}</h2>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h3>Repositórios</h3>
              {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
