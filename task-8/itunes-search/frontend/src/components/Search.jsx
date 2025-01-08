// ==========================================================
// FILE: src/components/Search.jsx
// This component renders the search form, allowing users to
// enter a query term and choose a media type. It also displays
// any search results (which are currently mocked in state, since
// actual API calls are left for your backend).
// ----------------------------------------------------------
// The user can click "Add to Favourites" on a result item. That
// call is handled by the function passed down from the parent (App.js).
// ==========================================================
import { useState } from 'react';

function Search({ onAddToFavourites }) {
    // --------------------------------------------
    // State to hold the search term from the input,
    // the selected media type, and the results array
    // from the (yet-to-be-implemented) backend call.
    // --------------------------------------------
    const [searchTerm, setSearchTerm] = useState('');
    const [mediaType, setMediaType] = useState('all');
    const [searchResults, setSearchResults] = useState([]);

    // --------------------------------------------
    // Function that would normally send the search
    // request to the backend, which in turn would
    // call the iTunes API. We are leaving placeholders
    // for the backend integration.
    // --------------------------------------------
    const handleSearch = async (e) => {
        e.preventDefault(); // prevent page refresh on form submit

        // Basic input validation:
        if (!searchTerm.trim()) {
            alert('Please enter a search term!');
            return;
        }

        // <-------------------BACKEND----------------------->
        // Explanation: In this block, you would typically:
        //  1) Make an HTTP request (axios/fetch) to your backend endpoint, sending:
        //     - The searchTerm
        //     - The selected mediaType
        //     - Possibly a JWT if needed for authorized requests
        //  2) The backend would call iTunes Search API with the parameters
        //  3) Then the backend would respond with the results
        //  4) You would set those results into `searchResults` state.

        // For demonstration, we mock a sample response.
        // Replace this with your actual data from the backend.
        const mockedResults = [
            {
                trackId: 123,
                trackName: 'Song 1',
                artistName: 'Artist A',
                artworkUrl100: 'https://via.placeholder.com/100/007bff/ffffff?text=Song+1',
            },
            {
                trackId: 456,
                trackName: 'Song 2',
                artistName: 'Artist B',
                artworkUrl100: 'https://via.placeholder.com/100/28a745/ffffff?text=Song+2',
            },
        ];

        // Update the state with the mocked data:
        setSearchResults(mockedResults);

        // Clear the input:
        setSearchTerm('');
    };

    return (
        <div className="search-container">
            <div className="search-inner-container">
                <h2>Search the iTunes Store</h2>
                <form onSubmit={handleSearch} className="search-form">
                    {/* Search term input */}
                    <label htmlFor="searchTerm">Enter Search Term:</label>
                    <input
                        id="searchTerm"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="e.g. Beatles"
                    />

                    {/* Media type dropdown */}
                    <label htmlFor="mediaType">Select Media Type:</label>
                    <select id="mediaType" value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="movie">Movie</option>
                        <option value="podcast">Podcast</option>
                        <option value="music">Music</option>
                        <option value="audiobook">Audiobook</option>
                        <option value="shortFilm">Short Film</option>
                        <option value="tvShow">TV Show</option>
                        <option value="software">Software</option>
                        <option value="ebook">eBook</option>
                    </select>

                    {/* Search button */}
                    <button type="submit">Search</button>
                </form>

                {/* Display search results (if any) */}
                <div className="results-container">
                    {searchResults.length === 0 ? (
                        <p>No results. Try searching above!</p>
                    ) : (
                        <ul className="results-list">
                            {searchResults.map((item) => (
                                <li key={item.trackId} className="result-item">
                                    <img src={item.artworkUrl100} alt={item.trackName} className="item-artwork" />
                                    <div className="item-info">
                                        <h4>{item.trackName}</h4>
                                        <p>{item.artistName}</p>
                                    </div>
                                    <button onClick={() => onAddToFavourites(item)}>Add to Favourites</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
