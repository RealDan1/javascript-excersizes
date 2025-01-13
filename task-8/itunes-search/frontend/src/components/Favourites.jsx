// ==========================================================
// FILE: src/components/Favourites.jsx
// This component displays the user's current favourite
// items (kept in the parent state in App.js and passed
// down here as 'favourites').
//
// Each favourite item can be removed by triggering
// "onRemoveFromFavourites" (passed from App.js).
// ==========================================================
function Favourites({ favourites, onRemoveFromFavourites }) {
    return (
        <div className="favourites-container">
            <div className="favourites-inner-container">
                <h2>Your Favourites</h2>
                {/* Check if no favourites yet */}
                {favourites.length === 0 ? (
                    <p>You have no favourites yet.</p>
                ) : (
                    <ul className="results-list">
                        {favourites.map((item) => (
                            <li key={item.id} className="result-item">
                                <img src={item.artwork} alt={item.name} className="item-artwork" />
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <button onClick={() => onRemoveFromFavourites(item.trackId)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Favourites;
