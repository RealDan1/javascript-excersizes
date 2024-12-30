import './App.css';
import api from './api';
import { useState, useEffect } from 'react';
import Login from './components/Login';

function App() {
    const { toDos, setToDos } = useState([]);

    useEffect(() => {
        fetchToDos(); // Fetch toDos each time the component loads
    });

    const fetchToDos = async () => {
        try {
            /* Sends a GET request to
      'http://localhost:8080/' (backend server) */
            const response = await api.get('/toDos');
            setToDos(response.data); //update state with toDos
        } catch (error) {
            console.error('Error fetching toDos:', error);
        }
    };

    return (
        <div className="App">
            <Login />
            {/* <h1>My ToDos</h1>
            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default App;
