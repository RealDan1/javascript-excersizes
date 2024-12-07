import { useState, useRef, useEffect } from 'react';

export default function AutoFocus() {
  const [username, setUsername] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Auto focus input</h1>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
