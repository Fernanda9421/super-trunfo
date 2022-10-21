import React, { useContext } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import Home from '../components/Home';
import RenderCards from '../components/RenderCards';
import Context from '../context/Context';

function Main() {
  const { infoCards } = useContext(Context);

  const {
    name, description, attr1, attr2, attr3, image, rare, trunfo,
  } = infoCards;

  return (
    <div className="container-page-main">
      <Home />

      <section id="create">
        <Form />
        <Card
          name={ name }
          description={ description }
          attr1={ attr1 }
          attr2={ attr2 }
          attr3={ attr3 }
          image={ image }
          rare={ rare }
          trunfo={ trunfo }
        />
      </section>
      <section id="cards">
        <h1 className="all-cards">Todas as cartas</h1>
        <RenderCards />
      </section>
    </div>
  );
}

export default Main;
