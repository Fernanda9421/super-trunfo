import React from 'react';

function SelectField({
  label, value, name, options, className, onChange,
}) {
  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <select
        className={ className }
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
