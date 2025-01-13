import { useState } from 'react';
import api from '../api';

function Search({ onAddToFavourites }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [mediaType, setMediaType] = useState('all');
    const [searchResults, setSearchResults] = useState([]); // results array from backend

    // --------------------------------------------

    //search function
    const handleSearch = async (e) => {
        e.preventDefault(); // prevent page refresh when the user submits the form

        // Check for empty input:
        if (!searchTerm.trim()) {
            alert('Please enter a search term!');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            let response;

            if (token) {
                //if a token exists - send it with the request;
                response = await api.get('/search', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add the token to the header
                    },
                    params: {
                        searchTerm: searchTerm,
                        mediaType: mediaType,
                    },
                });
            } else {
                //do the first request without a token - the middleware will register it as a first request and let it through - subsequent requests will require a valid token
                response = await api.get('/search', {
                    params: {
                        searchTerm: searchTerm,
                        mediaType: mediaType,
                    },
                });
            }

            console.dir(response.data, { depth: null }); //DELETE!!!!!! Just log the response for dev purposes

            const results = response.data.itunesResponse.results || [];

            // Update the state with the mocked data:
            setSearchResults(
                results.map((item) => ({
                    id: item.trackId || item.collectionId || item.artistId, // Use any unique ID available.
                    name: item.trackName || item.collectionName || item.artistName,
                    description: item.artistName || item.primaryGenreName, // Artist or genre as fallback.
                    artwork: item.artworkUrl100 || '',
                    releaseDate: `${item.releaseDate.substring(0, 4)}` || 'Unknown',
                }))
            );
            // Clear the input:
            setSearchTerm('');

            //DELETE!!!!! log for testing
            console.log(
                results.map((item) => ({
                    id: item.trackId || item.collectionId || item.artistId,
                    name: item.trackName || item.collectionName || item.artistName,
                    description: item.artistName || item.primaryGenreName,
                    artwork: item.artworkUrl100 || '',
                }))
            );
        } catch (error) {
            console.error(
                error.response?.data?.message || 'An error occurred while sending the search request to the backend.'
            );
        }
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
                                <li key={item.id} className="result-item">
                                    <img src={item.artwork} alt={item.name} className="item-artwork" />
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <p>Released: {item.releaseDate}</p>
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
