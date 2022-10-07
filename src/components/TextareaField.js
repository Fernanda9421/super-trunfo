import React from 'react';

function TextareaField({
  label, value, name, className, onChange,
}) {
  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <textarea
        id={ name }
        className={ className }
        value={ value }
        name={ name }
        onChange={ onChange }
      />
    </div>
  );
}

export default TextareaField;
