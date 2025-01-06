import './App.css';
import api from './api';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    const [toDos, setToDos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            fetchToDos();
        }
        // Fetch toDos each time the component loads
    }, [isLoggedIn]);

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
                    Authorization: `Bearer ${token}`, //add the token to the header
                },
            });
            setToDos(response.data.toDos); //update toDos state with toDos
            setUserName(response.data.userName);
        } catch (error) {
            console.error('Error fetching toDos:', error);
        }
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <>
                    {/*  Login Component  */}
                    {/* =================================== */}
                    <Login onLogin={() => setIsLoggedIn(true)} />
                    {/* // Pass a function to the login component that sets
                    isLoggedIn to true */}

                    {/* Register component */}
                    {/* =================================== */}
                    <Register />
                </>
            ) : (
                //ToDo's component once user logs in:
                //===================================
                <div>
                    <h1>{userName}'s ToDos</h1>
                    {toDos.length > 0 && isLoggedIn ? (
                        <ul>
                            {toDos.map((todo, index) => (
                                <li key={index}>{todo}</li>
                            ))}
                        </ul>
                    ) : (
                        <h2>No ToDos found</h2>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
