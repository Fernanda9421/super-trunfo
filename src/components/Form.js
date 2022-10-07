import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from './Button';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';

function Form() {
  const { infoCards, onInputChange } = useContext(Context);

  return (
    <form>
      <InputField
        label="Nome"
        id="name"
        className="card-name"
        value={ infoCards.name }
        name="name"
        type="text"
        onChange={ onInputChange }
      />

      <TextareaField
        label="Descrição"
        id="description"
        className="description"
        value={ infoCards.description }
        name="description"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 1"
        id="attr1"
        className="attr1"
        value={ infoCards.attr1 }
        name="attr1"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 2"
        id="attr2"
        className="attr2"
        value={ infoCards.attr2 }
        name="attr2"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 3"
        id="attr3"
        className="attr3"
        value={ infoCards.attr3 }
        name="attr3"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Imagem"
        id="image"
        className="image"
        value={ infoCards.image }
        name="image"
        type="text"
        onChange={ onInputChange }
      />

      <SelectField
        label="Raridade"
        id="rare"
        className="rare"
        value={ infoCards.rare }
        name="rare"
        options={ ['normal', 'raro', 'muito raro'] }
        onChange={ onInputChange }
      />

      <InputField
        label="Super Trunfo"
        id="trunfo"
        className="trunfo"
        value={ infoCards.trunfo }
        name="trunfo"
        type="checkbox"
        onChange={ onInputChange }
      />

      <Button
        className="save-button"
        type="button"
        content="Salvar"
        isSaveButtonDisabled={ infoCards.isSaveButtonDisabled }
      />
    </form>
  );
}

export default Form;
