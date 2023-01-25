import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: username,
                email: email,
                password: password,
                role: role
            })
            console.log(response)
            navigate("/login")
            console.log(e.response)
        } catch (e) {
            console.error(e)
            //stukje state aanmaken om de errors in de ui te loggen.
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                <input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    placeholder="Username"/>
            </label>
            <label htmlFor="email">
                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="emailadress"
                    placeholder="Emailadress"/>
            </label>
            <label htmlFor="password">
                <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Password"/>
            </label>
            <button type="submit">Register</button>
        </form>
            <div>Already have an account? <Link to="/login">Log in</Link></div>
        </>
    );
}

export default Signup;