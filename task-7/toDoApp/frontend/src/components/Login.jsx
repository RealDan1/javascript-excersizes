import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
    //navigate hook:
    const navigate = useNavigate();
    //state to hold login:
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        //get the token:
        try {
            const response = await api.post('/login', {
                username: userName,
                password: password,
            });

            if (response.data.token) {
                //if we receive a token, store it in local storage
                localStorage.setItem('token', response.data.token);
                //Redirect to home page (main to do)
                navigate('/');
            } else {
                alert('Login failed - token not received');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username">User Name:</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}
export default Login;
