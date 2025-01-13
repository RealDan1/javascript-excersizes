// *****************************************************************************************
// Below is the FRONTEND ONLY for an iTunes Search App. It follows a similar structure and style
// to the provided toDo app but is slightly more polished in UI and layout. All interactions
// that would normally call the backend (including JWT usage, axios calls, or iTunes API requests)
// are left as placeholders (commented with <-------------------BACKEND----------------------->).
// This way, you can fill them in yourself later. The “favourites” functionality is purely
// in-memory state-based (no data persistence once the page is refreshed).
// *****************************************************************************************

// ==========================================================
// FILE: frontend/src/App.js
// This is the root component of the React app. It handles routing,
// houses the main layout, and conditionally renders child components.
//
// We import Routes, Route, and Navigate from react-router-dom to handle
// different application paths. Here, we have two main routes:
//  1) "/" - which renders the Search page (with the search form and results).
//  2) "/favourites" - which shows the favourites list (in-memory).
// We also include a simple navigation bar to allow the user to
// switch between these sections.
// ==========================================================
import { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Search from './components/Search';
import Favourites from './components/Favourites';
import './App.css';

function App() {
    // --------------------------------------------
    // State to hold the array of favourited items.
    // This data is ephemeral and will not persist
    // once the page/app is refreshed.
    // --------------------------------------------
    const [favourites, setFavourites] = useState([]);

    // --------------------------------------------
    // Function to add an item to 'favourites' array.
    // This is triggered from the Search component
    // when the user clicks "Add to Favourites".
    // --------------------------------------------
    const handleAddToFavourites = (item) => {
        // Check if the item is already in favourites
        if (favourites.some((fav) => fav.id === item.id)) {
            alert('This item is already in your favourites!');
            return;
        }

        // Append the new item to the existing favourites list
        setFavourites((prevFavourites) => [...prevFavourites, item]);
    };

    // --------------------------------------------
    // Function to remove an item from 'favourites'
    // array. Triggered from the Favourites component
    // when the user clicks "Remove".
    // --------------------------------------------
    const handleRemoveFromFavourites = (trackId) => {
        const updatedFavourites = favourites.filter((item) => item.trackId !== trackId);
        setFavourites(updatedFavourites);
    };

    return (
        <div className="App">
            {/* Simple navigation bar at the top */}
            <nav className="nav-bar">
                <h1>iTunes Search App</h1>
                <div className="nav-links">
                    {/* Link component replaces anchor tags for React Router */}
                    <Link to="/">Search</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>
            </nav>

            {/* Added container to hold the main content with new styling */}
            <div className="main-content-wrapper">
                {/* Routing definitions:
            1) "/" -> Search page
            2) "/favourites" -> Favourites page
            3) "*" -> catches undefined routes, redirects to "/"
        */}
                <Routes>
                    <Route path="/" element={<Search onAddToFavourites={handleAddToFavourites} />} />
                    <Route
                        path="/favourites"
                        element={
                            <Favourites favourites={favourites} onRemoveFromFavourites={handleRemoveFromFavourites} />
                        }
                    />
                    {/* Redirect all unknown paths back to Search */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
