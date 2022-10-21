import React from 'react';
import Super from '../images/super_trunfo.png';

function Home() {
  return (
    <div className="presentation">
      <img className="image-logo" src={ Super } alt="Super trunfo logo" />
      <nav>
        <ul>
          <li><a className="nav-link" href="#create">Criar Carta</a></li>
          <li><a className="nav-link" href="#cards">Meu Baralho</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
