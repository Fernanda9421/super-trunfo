import React, { useContext } from 'react';
import Context from '../context/Context';
import Super from '../images/super_trunfo.png';

function Card() {
  const { infoCards } = useContext(Context);

  const {
    name, description, attr1, attr2, attr3, image, rare, trunfo,
  } = infoCards;

  return (
    <div className="card-container">
      <h1>Pré-Visualização</h1>
      <div className="visualization-card">
        <div className="first-background-card">
          <h2>{ name }</h2>
          <img className="visualization-image" src={ image } alt="Cachorro" />
          <p className="description">{ description }</p>
          <div className="attributes">
            <span>Brincalhão:</span>
            <span className="attr-number">{ attr1 }</span>
          </div>
          <div className="attributes">
            <span>Agressividade:</span>
            <span className="attr-number">{ attr2 }</span>
          </div>
          <div className="attributes">
            <span>Obediência:</span>
            <span className="attr-number">{ attr3 }</span>
          </div>
          <div className="attributes">
            <span>Raridade:</span>
            <span className="rare">{ rare }</span>
          </div>
          {
            trunfo === true && <img className="super" src={ Super } alt="super trunfo" />
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
