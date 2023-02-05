import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import styles from "../signup/Signup.module.css"
import Tree from "../../assets/Tree.jpg";

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
                password: password,
            })
            login(response.data.accessToken)
        } catch (e) {
            console.error(e.response)
            setError("Username and/or password not recognised")
        }
    }

    return (
        <main>
            <div className="outer-content-container">
                <div className="inner-content-container">
                    <img className={styles.tree} src={Tree} alt="the tree of lord of the rings"/>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.field} htmlFor="username">
                            <input className={styles.input}
                                   id="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                                   name="username"
                                   placeholder="Username"/>
                        </label>
                        <label className={styles.field} htmlFor="password">
                            <input className={styles.input}
                                   id="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   name="password"
                                   placeholder="Password"/>
                        </label>
                        <p className={styles.error}>{error}</p>
                        <button className={styles.signUp} type="submit">Log in</button>
                    </form>
                    <p className={styles.signedUp}>Not yet registered? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </main>
    );
}

export default Login;