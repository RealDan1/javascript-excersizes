import { useState, useEffect } from 'react';
import api from '../api';

function ToDos({ isLoggedIn, userName, setUserName }) {
    const [toDos, setToDos] = useState([]);
    const [newToDo, setNewToDo] = useState('');

    // Function for getting token and Todos if logged in:
    // =================================
    const fetchToDos = async () => {
        try {
            //get the token from localstorage
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('no token found');
                return;
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

    useEffect(() => {
        if (isLoggedIn) {
            fetchToDos();
        }
        // Fetch toDos each time the component loads
        // eslint-disable-next-line
    }, [isLoggedIn]); // if isLoggedIn changes - retrigger
    //disabled eslint for the above line because it was throwing a warning about dependencies but apparently this issue shouldn't cause problems in this case.

    // Function to add new toDo
    const addToDo = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('no token found');
            return;
        }
        const response = await api.post(
            '/toDos/add',
            {
                text: newToDo,
                completed: false,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, //add the token to the header
                },
            }
        );
        setToDos(response.data.toDos); //refresh the toDos state
        setNewToDo(''); //clear the input
    };
    return (
        <div>
            {/* Display username's todos */}
            <h1>{userName}'s ToDos</h1>
            {toDos.length && isLoggedIn > 0 ? (
                <>
                    {' '}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            addToDo();
                        }}
                    >
                        <input type="text" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
                        <button type="submit">Add</button>
                    </form>
                    <ul>
                        {toDos.map((todo, index) => (
                            <li key={index}>{todo}</li> // Render each todo as a list item
                        ))}
                    </ul>
                </>
            ) : (
                <h2>No ToDos found</h2> // Show message if no todos exist
            )}
        </div>
    );
}

export default ToDos;
