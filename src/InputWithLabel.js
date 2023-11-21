import React, { useEffect, useRef } from 'react';

function InputWithLabel(props) {
  const { id, value, onChange, type, children } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input ref={inputRef} id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default InputWithLabel;