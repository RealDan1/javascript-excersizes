import React, { useState } from 'react';
function App() {
    const [count, setCount] = useState(0);
    const buttonStyle = {
        backgroundColor: 'lightblue',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
    };
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Simple Counter App</h1>
            <p>Count: {count}</p>
            <button style={{ ...buttonStyle, marginRight: '10px' }} onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button style={buttonStyle} onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
}
export default App;
