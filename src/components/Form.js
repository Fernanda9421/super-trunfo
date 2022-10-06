import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';

function Form() {
  const [infoCards, setInfoCards] = useState({
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
    rare: 'normal',
    trunfo: 'false',
  });

  const handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const defaultValue = (type === 'checkbox' ? checked : value);

    setInfoCards({
      ...infoCards,
      [name]: defaultValue,
    });
  };

  return (
    <form>
      <InputField
        label="Nome"
        className="card-name"
        value={ infoCards.name }
        name="name"
        type="text"
        onChange={ handleChange }
      />

      <TextareaField
        label="Descrição"
        className="description"
        value={ infoCards.description }
        name="description"
        onChange={ handleChange }
      />

      <InputField
        label="Atributo 1"
        className="attr1"
        value={ infoCards.attr1 }
        name="attr1"
        type="number"
        onChange={ handleChange }
      />

      <InputField
        label="Atributo 2"
        className="attr2"
        value={ infoCards.attr2 }
        name="attr2"
        type="number"
        onChange={ handleChange }
      />

      <InputField
        label="Atributo 3"
        className="attr3"
        value={ infoCards.attr3 }
        name="attr3"
        type="number"
        onChange={ handleChange }
      />

      <InputField
        label="Imagem"
        className="image"
        value={ infoCards.image }
        name="image"
        type="text"
        onChange={ handleChange }
      />

      <SelectField
        label="Raridade"
        className="rare"
        value={ infoCards.rare }
        name="rare"
        options={ ['normal', 'raro', 'muito raro'] }
        onChange={ handleChange }
      />

      <InputField
        label="Super Trunfo"
        className="trunfo"
        value={ infoCards.trunfo }
        name="trunfo"
        type="checkbox"
        onChange={ handleChange }
      />
    </form>
  );
}

export default Form;
