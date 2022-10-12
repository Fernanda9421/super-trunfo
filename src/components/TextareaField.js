import React from 'react';

function TextareaField({
  label, value, name, className, onChange, register,
}) {
  return (
    <div className="main">
      <label htmlFor={ name }>{ label }</label>
      <textarea
        id={ name }
        className={ className }
        value={ value }
        name={ name }
        { ...register(name) }
        onChange={ onChange }
      />
    </div>
  );
}

export default TextareaField;
