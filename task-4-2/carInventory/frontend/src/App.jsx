import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
    //READ all cars
    //==================================
    // State to store fetched data
    const [data, setData] = useState({});
    useEffect(() => {
        fetchCars(); // Fetch data each time the component loads
    }, []);

    // Function to fetch data from the server
    //================
    const fetchCars = async () => {
        try {
            /* Sends a POST request to
      'http://localhost:5000//api/data' (backend server) */
            const response = await axios.get('/cars');
            setData(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    //CREATE a Car
    //==================================
    //State to hold the input
    const [newCar, setNewCar] = useState({ make: '', model: 0, year: 0, owner: '', registration: '' });

    const addCar = async () => {};
    return (
        <div className="App">
            <header className="App-header">
                {/* Display the message, or 'Loading...' if data is not yet fetched*/}
                <button onClick={addCar}></button>

                <ul>
                    {'Loading...' ||
                        data.map((item) => {
                            <li>{item.make}</li>;
                        })}
                </ul>
            </header>
        </div>
    );
}
export default App;
