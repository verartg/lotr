import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
                password: password,
            })
            // console.log(response)
            console.log(e.response)
            login( response.data.accessToken )
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
                <label htmlFor="password">
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder="Password"/>
                </label>
                <button type="submit">Log in</button>
        </form>
            <div>Not yet registered? <Link to="/signup">Sign up</Link></div>
        </>
    );
}

export default Login;