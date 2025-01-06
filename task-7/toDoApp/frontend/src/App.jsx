import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ToDos from './components/Todos';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Logout function(clear the token and log out):
    // ==================================
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
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
                    <ToDos isLoggedIn={isLoggedIn} userName={userName} setUserName={setUserName} />
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default App;
