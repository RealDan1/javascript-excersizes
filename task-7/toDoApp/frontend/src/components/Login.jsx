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
        const token = await api.get('/login', {
            body: {
                username: userName,
                password: password,
            },
        });

        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        } else {
            alert('Login failed - either user does not exist or token not received');
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="username">User Name:</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;
