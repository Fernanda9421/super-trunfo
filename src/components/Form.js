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
        className="card-name"
        value={ infoCards.name }
        name="name"
        type="text"
        onChange={ onInputChange }
      />

      <TextareaField
        label="Descrição"
        className="description"
        value={ infoCards.description }
        name="description"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 1"
        className="attr1"
        value={ infoCards.attr1 }
        name="attr1"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 2"
        className="attr2"
        value={ infoCards.attr2 }
        name="attr2"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Atributo 3"
        className="attr3"
        value={ infoCards.attr3 }
        name="attr3"
        type="number"
        onChange={ onInputChange }
      />

      <InputField
        label="Imagem"
        className="image"
        value={ infoCards.image }
        name="image"
        type="text"
        onChange={ onInputChange }
      />

      <SelectField
        label="Raridade"
        className="rare"
        value={ infoCards.rare }
        name="rare"
        options={ ['normal', 'raro', 'muito raro'] }
        onChange={ onInputChange }
      />

      <InputField
        label="Super Trunfo"
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
