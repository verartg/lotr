import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Tree from '../../assets/Tree.jpg';
import styles from './Signup.module.css';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: username,
                email: email,
                password: password,
                role: role
            })
            navigate("/login")
        } catch (e) {
            console.error(e)
            console.log(e.response.data.message)
            if (!email.includes("@")) {
                setEmailError("Emailadress invalid")
            }
            if (username.length < 6) {
                setUsernameError("Username requires at least 6 characters")
            }
            if (password.length < 6) {
                setPasswordError("Password requires at least 6 characters")
            } else setUsernameError(e.response.data.message)
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
                        <p className={styles.errorUser}>{usernameError}</p>
                        <label className={styles.field} htmlFor="email">
                            <input className={styles.input}
                                   id="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   name="emailadress"
                                   placeholder="Emailadress"/>
                        </label>
                        <p className={styles.errorEmail}>{emailError}</p>
                        <label className={styles.field} htmlFor="password">
                            <input className={styles.input}
                                   id="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   name="password"
                                   placeholder="Password"
                            />
                        </label>
                        <p className={styles.errorPassword}>{passwordError}</p>
                        <button className={styles.signUp} type="submit">Register</button>
                    </form>
                    <p className={styles.signedUp}>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
            </div>
        </main>
    );
}

export default Signup;