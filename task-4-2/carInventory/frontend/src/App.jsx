import React, { useState, useEffect } from 'react';
import api from './api';
import './App.css';
function App() {
    //READ all cars
    //==================================
    // State to store fetched data
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars(); // Fetch cars each time the component loads
    }, []);

    useEffect(() => {
        fetchCars();
    }, [cars]); // fetch all cars each time cars changes

    // Function to fetch cars from the server
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
    //=========================================
    const deleteCar = async (id) => {
        try {
            await api.delete(`/${id}`);
            setCars(cars.filter((car) => car._id !== id));
        } catch (error) {
            console.error('Error deleting car:', error);
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
            const response = await api.put(`/${editingCar._id}`, editingCar);

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
            console.error('Error updating car:', error);
        }
    };

    //UPDATE MANY cars - specifically the owner field only - for demonstrative purposes
    //=======================================
    const [updateManyCars, setUpdateManyCars] = useState({ oldOwner: '', newOwner: '' });

    const updateMany = async () => {
        try {
            //sent PUT request to update all cars
            console.log('Payload to be sent:', updateManyCars); //log for debugging
            const response = await api.put('/updateMany', updateManyCars);
            console.log(response); // this logs how many cars were updated and other data - e.g. if nothing was updated
            // fetchCars(); this is already handled by the useEffect a the top that monitors for any changes in the cars array and updates the list accordingly
        } catch (error) {
            console.error('Error updating cars:', error);
        }
    };

    //FILTER the cars array by any car older than five years (hardcoded):
    // ==========================================================
    const [filteredCars, setFilteredCars] = useState([]);

    const filterCars = () => {
        const yearToFilter = 2019; // can potentially change this later to use a variable number but as a proof of concept it works.
        setFilteredCars(cars.filter((car) => car.year < yearToFilter));
    };

    // add state for boolean to show/hide the form to filter cars
    const [showFilterForm, setShowFilterForm] = useState(false);

    //function to flip the boolean to show/hide the form
    const toggleFilterForm = () => {
        setShowFilterForm(!showFilterForm);
        setFilteredCars([]);
    };

    return (
        <div className="App">
            <header className="App-header">
                {/* Form for adding a new car*/}
                {/* =============================== */}
                <h3>Enter values for new car:</h3>
                <label htmlFor="makeInput">Make:</label>
                <input
                    id="makeInput"
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
                    onChange={(e) => setNewCar({ ...newCar, year: Number(e.target.value) })}
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
                {/* Form to update cars */}
                {/* ==================================================== */}
                {editingCar && (
                    <div>
                        <h2>Update Car</h2>
                        <input
                            value={editingCar.make}
                            onChange={(e) => setEditingCar({ ...editingCar, make: e.target.value })}
                            placeholder="e.g. Honda"
                        />
                        <input
                            value={editingCar.model}
                            onChange={(e) => setEditingCar({ ...editingCar, model: e.target.value })}
                            placeholder="e.g. Civic"
                        />
                        <input
                            value={editingCar.year}
                            onChange={(e) => setEditingCar({ ...editingCar, year: Number(e.target.value) })}
                            placeholder="e.g. 2022"
                        />
                        <input
                            value={editingCar.owner}
                            onChange={(e) => setEditingCar({ ...editingCar, owner: e.target.value })}
                            placeholder="e.g. John Doe"
                        />
                        <input
                            value={editingCar.registration}
                            onChange={(e) => setEditingCar({ ...editingCar, registration: e.target.value })}
                            placeholder="e.g. ABC123"
                        />
                        {/* button to update the car */}
                        <button onClick={updateCar}>Update</button>
                        {/* button to cancel the update */}
                        <button onClick={() => setEditingCar(null)}>Cancel</button>
                    </div>
                )}
                {/* display list and details of all cars in the database */}
                {/* ============================================ */}
                <h3>Cars:</h3>
                <ul>
                    {cars.map((car) => {
                        return (
                            <div className="car" key={car._id}>
                                <li>Make: {car.make}</li>
                                <li>Model: {car.model}</li>
                                <li>Year: {car.year}</li>
                                <li>Owner: {car.owner}</li>
                                <li>Registration: {car.registration}</li>

                                <button onClick={() => startEditingCar(car)}>Edit</button>
                                <button
                                    onClick={() => {
                                        deleteCar(car._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </ul>
                {/* filter cars for anything older than a certain year*/}
                {/* =============================================== */}
                <h3>Filter cars by any car older than five years:</h3>
                <button
                    onClick={() => {
                        filterCars();
                        setShowFilterForm(true);
                    }}
                >
                    Filter{' '}
                </button>
                {/* button to show/hide the filter form */}
                {showFilterForm && (
                    <div>
                        {/* Button to hide the filtered form and reset filtered cars */}

                        {/* Display the filtered cars */}
                        {filteredCars.map((car) => (
                            <div className="filteredCar" key={car._id}>
                                <li>Make: {car.make}</li>
                                <li>Model: {car.model}</li>
                                <li>Year: {car.year}</li>
                                <li>Owner: {car.owner}</li>
                                <li>Registration: {car.registration}</li>
                            </div>
                        ))}
                        <button
                            onClick={() => {
                                toggleFilterForm();
                                setFilteredCars([]); // Reset the filtered cars array
                            }}
                        >
                            Hide Filtered Cars
                        </button>
                    </div>
                )}
                <h3>Update Multiple Owners at once</h3>
                <label htmlFor="updateOldOwner">
                    Input previous owner - choose an owner that you wish to update all cars previously owned by that
                    owner:
                </label>
                <input
                    id="updateOldOwner"
                    value={updateManyCars.oldOwner}
                    onChange={(e) => setUpdateManyCars({ ...updateManyCars, oldOwner: e.target.value })}
                    placeholder="e.g. John Doe"
                />
                <label htmlFor="updateNewOwner">
                    Input new owner - this value will be updated across all cars that match the old owner.
                </label>
                <input
                    id="updateNewOwner"
                    value={updateManyCars.newOwner}
                    onChange={(e) => setUpdateManyCars({ ...updateManyCars, newOwner: e.target.value })}
                    placeholder="e.g. John Doe"
                />
                <button onClick={updateMany}>Update Owners</button>
            </header>
        </div>
    );
}
export default App;
