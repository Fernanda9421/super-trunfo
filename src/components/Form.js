import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Context from '../context/Context';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';
import schema from '../schemas/schema';
import Button from './Button';

function Form() {
  const { cards, setCards, infoCards, setInfoCards, onInputChange } = useContext(Context);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async () => {
    reset({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
    });
    setCards([...cards, infoCards]);
    setInfoCards({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'Normal',
      trunfo: 'false',
    });
  };

  return (
    <main>
      <form className="form" onSubmit={ handleSubmit(submit) }>
        <h1>Adicionar nova carta</h1>
        <InputField
          label="Nome"
          id="name"
          className="card-name"
          value={ infoCards.name }
          name="name"
          type="text"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.name?.message}</p>

        <TextareaField
          label="Descrição"
          id="description"
          className="description"
          value={ infoCards.description }
          name="description"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.description?.message}</p>

        <InputField
          label="Brincalhão"
          id="attr1"
          className="attr"
          value={ infoCards.attr1 }
          name="attr1"
          type="number"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.attr1?.message}</p>

        <InputField
          label="Agressividade"
          id="attr2"
          className="attr"
          value={ infoCards.attr2 }
          name="attr2"
          type="number"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.attr2?.message}</p>

        <InputField
          label="Obediência"
          id="attr3"
          className="attr"
          value={ infoCards.attr3 }
          name="attr3"
          type="number"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.attr3?.message}</p>

        <InputField
          label="Imagem"
          id="image"
          className="image"
          value={ infoCards.image }
          name="image"
          type="text"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.image?.message}</p>

        <SelectField
          label="Raridade"
          id="rare"
          className="rare"
          value={ infoCards.rare }
          name="rare"
          options={ ['Normal', 'Raro', 'Muito raro'] }
          onChange={ onInputChange }
        />

        <InputField
          label="Super Trunfo"
          id="trunfo"
          className="trunfo"
          value={ infoCards.trunfo }
          name="trunfo"
          type="checkbox"
          register={ register }
          onChange={ onInputChange }
        />
        <p className="field-error">{errors.trunfo?.message}</p>

        <Button
          className="save-button"
          type="submit"
          content="Salvar"
        />
      </form>
    </main>
  );
}

export default Form;
