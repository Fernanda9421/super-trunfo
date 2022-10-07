import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa formulário para adicionar cartas ao baralho', () => {
  it('Valida se existe input para "Nome"', () => {
    render(<App />);

    const inputName = screen.getByLabelText(/Nome/i);
    expect(inputName).toBeInTheDocument();
  });

  it('Valida se existe textarea para "Descrição"', () => {
    render(<App />);

    const textareaDescription = screen.getByLabelText(/Descrição/i);
    expect(textareaDescription).toBeInTheDocument();
  });

  it('Valida se existe input para "Atributo 1"', () => {
    render(<App />);

    const inputAttr1 = screen.getByLabelText(/Atributo 1/i);
    expect(inputAttr1).toBeInTheDocument();
  });

  it('Valida se existe input para "Atributo 2"', () => {
    render(<App />);

    const inputAttr2 = screen.getByLabelText(/Atributo 2/i);
    expect(inputAttr2).toBeInTheDocument();
  });

  it('Valida se existe input para "Atributo 3"', () => {
    render(<App />);

    const inputAttr3 = screen.getByLabelText(/Atributo 3/i);
    expect(inputAttr3).toBeInTheDocument();
  });

  it('Valida se existe input para "Imagem"', () => {
    render(<App />);

    const image = screen.getByLabelText(/Imagem/i);
    expect(image).toBeInTheDocument();
  });

  it('Valida se existe select para "Raridade", com valores específicos', () => {
    render(<App />);

    const rare = screen.getByLabelText(/Raridade/i);
    expect(rare).toBeInTheDocument();
    expect(rare[0]).toHaveValue('normal');
    expect(rare[1]).toHaveValue('raro');
    expect(rare[2]).toHaveValue('muito raro');
  });

  it('Valida se existe input para "Super Trunfo"', () => {
    render(<App />);

    const hasTrunfo = screen.getByLabelText(/Super Trunfo/i);
    expect(hasTrunfo).toBeInTheDocument();
    expect(hasTrunfo).not.toBeChecked();
  });

  it('Valida se existe botão de "Salvar" carta', () => {
    render(<App />);

    const buttonSave = screen.getByRole('button', { name: /Salvar/i });
    expect(buttonSave).toBeInTheDocument();
    expect(buttonSave).toBeDisabled();
  });
});
