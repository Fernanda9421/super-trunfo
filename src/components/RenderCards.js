import React, { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';

function RenderCards() {
  const { cards } = useContext(Context);

  return (
    <div className="main-cards">
      {
        cards && cards
          .map(({
            name, description, attr1, attr2, attr3, image, rare, trunfo,
          }, index) => (
            <div className="main-cards-s" key={ name }>
              <Card
                heading={ `Carta${index + 1}` }
                name={ name }
                description={ description }
                attr1={ attr1 }
                attr2={ attr2 }
                attr3={ attr3 }
                image={ image }
                rare={ rare }
                trunfo={ trunfo }
              />
            </div>
          ))
      }
    </div>
  );
}

export default RenderCards;
