import React from 'react';

function Button({
  className, type, content, isSaveButtonDisabled, onSaveButtonClick,
}) {
  return (
    <div>
      <button
        className={ className }
        type={ type }
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        { content }
      </button>
    </div>
  );
}

export default Button;
