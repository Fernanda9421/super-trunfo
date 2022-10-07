import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [infoCards, setInfoCards] = useState({
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
    rare: 'normal',
    trunfo: 'false',
    isSaveButtonDisabled: true,
  });

  const onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const defaultValue = (type === 'checkbox' ? checked : value);

    setInfoCards({
      ...infoCards,
      [name]: defaultValue,
    });
  };

  const context = {
    infoCards,
    onInputChange,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
