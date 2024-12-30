import './App.css';
import api from './api';
import { useState, useEffect } from 'react';

function App() {
    const { toDos, setToDos } = useState([]);

    useEffect(() => {
        fetchToDos(); // Fetch toDos each time the component loads
    });

    const fetchToDos = async () => {
        try {
            /* Sends a GET request to
      'http://localhost:8080/' (backend server) */
            const response = await api.get('');
            setToDos(response.data); //update state with toDos
        } catch (error) {
            console.error('Error fetching toDos:', error);
        }
    };

    return (
        <div className="App">
            <h1>{<p>loading</p> && toDos}</h1>
        </div>
    );
}

export default App;
