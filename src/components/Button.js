import React from 'react';

function Button({
  className, type, content,
}) {
  return (
    <div>
      <button
        className={ className }
        type={ type }
      >
        { content }
      </button>
    </div>
  );
}

export default Button;
