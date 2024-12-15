import React, { useState, useEffect } from 'react';
import api from './api'; // Import the Axios instance.
import './App.css';
function App() {
    //READ all cars
    //==================================
    // State to store fetched data
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars(); // Fetch cars each time the component loads
    }, []);

    // Function to fetch cars from the server
    //================
    const fetchCars = async () => {
        try {
            /* Sends a POST request to
      'http://localhost:8080//api/cars' (backend server) */
            const response = await api.get('');
            setCars(response.data); //update state with cars
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };
    //CREATE a Car
    //==================================
    //State to hold the input
    const [newCar, setNewCar] = useState({ make: '', model: '', year: 0, owner: '', registration: '' });

    const addCar = async () => {
        try {
            // POST request.
            const response = await api.post('/add', newCar);
            setCars([...cars, response.data]); //add new car to state
            setNewCar({ make: '', model: 0, year: 0, owner: '', registration: '' }); // Reset the form.
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    //DELETE a car
    //==================================
    const deleteCar = async (id) => {
        try {
            await api.delete(`/${id}`);
            setCars(cars.filter((car) => car._id !== id));
        } catch (error) {
            console.error('Error deleting potion:', error);
        }
    };

    //UPDATE a car
    //=======================================
    const [editingCar, setEditingCar] = useState(null);

    //function to start editing a car(for the form)
    const startEditingCar = (car) => {
        setEditingCar(car);
    };

    const updateCar = async () => {
        try {
            //sent PUT request to update car
            const response = await api.put(`/${editingCar.id}`, editingCar);

            //update the cars state (all cars array) with the edited car
            setCars(
                cars.map((car) => {
                    if (car._id === editingCar._id) {
                        return response.data;
                    } else {
                        return car;
                    }
                })
            );
        } catch (error) {
            console.error('Error updating potion:', error);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* Form for adding a new car*/}
                <h3>Enter values for new car:</h3>
                <label htmlFor="makeInput">Make:</label>
                <input
                    value={newCar.make}
                    onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
                    placeholder="e.g. Honda"
                />
                <label htmlFor="modelInput">Model:</label>
                <input
                    id="modelInput"
                    value={newCar.model}
                    onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                    placeholder="e.g. Civic"
                />
                <label htmlFor="yearInput">Year:</label>
                <input
                    id="yearInput"
                    value={newCar.year}
                    onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
                    placeholder="e.g. 2022"
                />
                <label htmlFor="ownerInput">Owner:</label>{' '}
                <input
                    id="ownerInput"
                    value={newCar.owner}
                    onChange={(e) => setNewCar({ ...newCar, owner: e.target.value })}
                    placeholder="e.g. John Doe"
                ></input>
                <label htmlFor="registrationInput">Registration:</label>
                <input
                    id="registrationInput"
                    value={newCar.registration}
                    onChange={(e) => setNewCar({ ...newCar, registration: e.target.value })}
                    placeholder="e.g. ABC123"
                ></input>
                <button onClick={addCar}>Add Car</button>
                {/* display list and details of all cars in the database */}
                <h3>Cars:</h3>
                <ul>
                    {cars.map((item) => {
                        return (
                            <div className="car" key={item._id}>
                                <li>Make: {item.make}</li>
                                <li>Model: {item.model}</li>
                                <li>Year: {item.year}</li>
                                <li>Owner: {item.owner}</li>
                                <li>Registration: {item.registration}</li>

                                <button
                                    onClick={() => {
                                        deleteCar(item._id);
                                    }}
                                >
                                    Delete
                                </button>
                                <button onClick={() => startEditingCar(car)}>Edit</button>
                            </div>
                        );
                    })}
                </ul>
            </header>
        </div>
    );
}
export default App;
