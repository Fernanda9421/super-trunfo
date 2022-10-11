import React from 'react';

function SelectField({
  label, value, name, options, className, onChange,
}) {
  return (
    <div className="main">
      <label htmlFor={ name }>{ label }</label>
      <select
        className={ className }
        id={ name }
        value={ value }
        name={ name }
        onChange={ onChange }
      >
        {
          options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default SelectField;
