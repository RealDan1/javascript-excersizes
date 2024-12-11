import React, { useState, useEffect } from 'react';
import api from './api'; // Import the Axios instance.
import './App.css';
function App() {
    //READ all cars
    //==================================
    // State to store fetched data
    const [cars, setCars] = useState({});
    useEffect(() => {
        fetchCars(); // Fetch cars each time the component loads
    }, []);

    // Function to fetch cars from the server
    //================
    const fetchCars = async () => {
        try {
            /* Sends a POST request to
      'http://localhost:8080//api/cars' (backend server) */
            const response = await api.get('/');
            setCars(response.data); //update state with cars
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };
    //CREATE a Car
    //==================================
    //State to hold the input
    const [newCar, setNewCar] = useState({ make: '', model: 0, year: 0, owner: '', registration: '' });

    const addCar = async () => {
        try {
            // POST request.
            const response = await api.post('/', newCar);
            setCars(...cars, response.data); //add new car to state
            setNewCar({ make: '', model: 0, year: 0, owner: '', registration: '' }); // Reset the form.
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* Display the message, or 'Loading...' if data is not yet fetched*/}

                <h5>Enter values for new car:</h5>
                <input
                    value={newCar.make}
                    onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
                    placeholder="Car Make"
                />
                <button onClick={addCar}>Add Car</button>

                <h5>Cars:</h5>

                <ul>
                    {'Loading...' ||
                        cars.map((item) => {
                            <li>{item.make}</li>;
                        })}
                </ul>
            </header>
        </div>
    );
}
export default App;
