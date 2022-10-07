import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa valores iniciais e mudanças nos inputs', () => {
  it('Verifica se input de nome inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const inputName = screen.getByLabelText(/Nome/i);
    expect(inputName).toHaveValue('');

    userEvent.type(inputName, 'Carta Um');
    expect(inputName).toHaveValue('Carta Um');
  });

  it('Verifica se textarea de descrição inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const textareaDescription = screen.getByLabelText(/Descrição/i);
    expect(textareaDescription).toHaveValue('');

    userEvent.type(textareaDescription, 'Descrição da carta Um');
    expect(textareaDescription).toHaveValue('Descrição da carta Um');
  });

  it('Verifica se input de Atributo 1 inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const inputAttr1 = screen.getByLabelText(/Atributo 1/i);
    expect(inputAttr1).toHaveValue(0);

    userEvent.type(inputAttr1, '45');
    expect(inputAttr1).toHaveValue(45);
  });

  it('Verifica se input de Atributo 2 inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const inputAttr2 = screen.getByLabelText(/Atributo 2/i);
    expect(inputAttr2).toHaveValue(0);

    userEvent.type(inputAttr2, '29');
    expect(inputAttr2).toHaveValue(29);
  });

  it('Verifica se input de Atributo 3 inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const inputAttr3 = screen.getByLabelText(/Atributo 3/i);
    expect(inputAttr3).toHaveValue(0);

    userEvent.type(inputAttr3, '12');
    expect(inputAttr3).toHaveValue(12);
  });

  it('Verifica se input de Imagem inicia vazio e recebe novo valor digitado', () => {
    render(<App />);

    const image = screen.getByLabelText(/Imagem/i);
    expect(image).toHaveValue('');

    userEvent.type(image, 'url_da_imagem');
    expect(image).toHaveValue('url_da_imagem');
  });

  it('Verifica se input de Raridade inicia com "normal" e recebe novo valor selecionado', () => {
    render(<App />);

    const rare = screen.getByLabelText(/Raridade/i);
    expect(rare).toHaveValue('normal');

    userEvent.selectOptions(rare, "raro");
    expect(rare).toHaveValue('raro');
  });

  it('Verifica se input de Super Trunfo inicia não selecionado e sofre alteração', () => {
    render(<App />);

    const hasTrunfo = screen.getByLabelText(/Super Trunfo/i);
    expect(hasTrunfo).not.toBeChecked();

    userEvent.click(hasTrunfo);
    expect(hasTrunfo).toBeChecked();
  });

  it('Verifica se botão de Salvar inicia desabilitado', () => {
    render(<App />);

    const buttonSave = screen.getByRole('button', { name: /Salvar/i });
    expect(buttonSave).toBeDisabled();
  });
});
