import React from 'react';

function InputField({
  label, value, name, type, className, onChange,
}) {
  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <input
        className={ className }
        id={ name }
        value={ value }
        name={ name }
        type={ type }
        onChange={ onChange }
      />
    </div>
  );
}

export default InputField;
