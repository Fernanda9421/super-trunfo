import React from 'react';

function InputField({
  label, value, name, type, className, onChange, register,
}) {
  return (
    <div className="main">
      <label htmlFor={ name }>{ label }</label>
      <input
        className={ className }
        id={ name }
        value={ value }
        name={ name }
        type={ type }
        { ...register(name) }
        onChange={ onChange }
      />
    </div>
  );
}

export default InputField;
