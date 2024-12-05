import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
    const [message, setMessage] = useState(''); // State to store fetched data
    useEffect(() => {
        fetchData(); // Fetch data each time the component loads
    }, []);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            /* Sends a GET request to
      'http://localhost:5000//api/data' (backend server) */
            const response = await axios.get('/api/message');
            setMessage(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* Display the message, or 'Loading...' if data is not yet fetched*/}
                <h1>{message || 'Loading...'}</h1>
            </header>
        </div>
    );
}
export default App;
