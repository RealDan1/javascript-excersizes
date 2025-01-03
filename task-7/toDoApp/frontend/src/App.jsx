import './App.css';
import api from './api';
import { useState, useEffect } from 'react';
import Login from './components/Login';

function App() {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        fetchToDos(); // Fetch toDos each time the component loads
    }, []);

    const fetchToDos = async () => {
        try {
            //get the token from localstorage
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('no token found');
            }

            /* Sends a GET request to
      'http://localhost:8080/' (backend server) */
            const response = await api.get('/toDos', {
                headers: {
                    Authorisation: `Bearer ${token}`, //add the token to the header
                },
            });
            setToDos(response.data.toDos); //update state with toDos
        } catch (error) {
            console.error('Error fetching toDos:', error);
        }
    };

    return (
        <div className="App">
            <Login />

            {/* temporarily display toDos */}
            {toDos.length > 0 ? (
                <div>
                    <h1>My ToDos</h1>
                    <ul>
                        {toDos.map((todo) => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h2>No ToDos found</h2>
            )}
        </div>
    );
}

export default App;
