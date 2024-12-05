import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
    const [message1, setMessage1] = useState(''); // State to store first message
    const [message2, setMessage2] = useState(''); // State to store second message
    useEffect(() => {
        fetchData(); // Fetch data each time the component loads
    }, []);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            /* Sends a GET request to
      'http://localhost:6000//api/data' (backend server) */
            const response1 = await axios.get('/api/data');
            setMessage1(response1.data.message); // Update state with fetched data

            const response2 = await axios.get('/api/message');
            setMessage2(response2.data.message); // Update state with second fetched message
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* Display the message, or 'Loading...' if data is not yet fetched*/}
                <h1>{message1 || 'Loading...'}</h1>
                <h1>{message2 || 'Loading...'}</h1>
            </header>
        </div>
    );
}
export default App;
