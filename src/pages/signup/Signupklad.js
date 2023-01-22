import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer xxx.xxx.xxx",
    }

    async function register(e) {
        e.preventDefault()
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com//api/auth/signup`, {
                headers: headers,
                email: email,
                password: password,
                username: username,
                role: ["user"],
            })
            {console.log(response)}
            // navigate("/login");
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1>Registreren</h1>
            <form onSubmit={register}>
                <label htmlFor="username">Username
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="emailadress">Emailadress
                    <input
                        type="email"
                        id="emailadress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />
                </label>
                <label htmlFor="password">Password
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                </label>
                <button type="submit">Registreren</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link> </p>
        </>
    );
}

export default SignUp;