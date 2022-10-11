import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

function InputField({
  label, value, name, type, className, onChange,
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
        onChange={ onChange }
      />
      { type !== 'checkbox' && <FaTimesCircle className="svg-error" /> }
    </div>
  );
}

export default InputField;
