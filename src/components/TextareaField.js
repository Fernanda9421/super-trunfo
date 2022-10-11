import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

function TextareaField({
  label, value, name, className, onChange,
}) {
  return (
    <div className="main">
      <label htmlFor={ name }>{ label }</label>
      <textarea
        id={ name }
        className={ className }
        value={ value }
        name={ name }
        onChange={ onChange }
      />
      <FaTimesCircle className="svg-error" />
    </div>
  );
}

export default TextareaField;
