import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Tree from '../../assets/Tree.jpg';
import styles from './Signup.module.css';
import Inputlabel from "../../components/inputlabel/Inputlabel";

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
            console.log(e.response)
            //stukje state aanmaken om de errors in de ui te loggen.
        }
    }


    return (
        <main>
            <div className="outer-content-container">
                <div className="inner-content-container">
                    <img className={styles.tree} src={Tree} alt="the tree of lord of the rings"/>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/*<Inputlabel htmlFor="username" id="username" value={username} setUsername={e.target.value} name="username" placeholder="Username"></Inputlabel>*/}
                        <label className={styles.field} htmlFor="username">
                            <input className={styles.input}
                                   id="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                                   name="username"
                                   placeholder="Username"/>
                        </label>
                        <label className={styles.field} htmlFor="email">
                            <input className={styles.input}
                                   id="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   name="emailadress"
                                   placeholder="Emailadress"/>
                        </label>
                        <label className={styles.field} htmlFor="password">
                            <input className={styles.input}
                                   id="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   name="password"
                                   placeholder="Password"
                            />
                        </label>
                        <button className={styles.signUp} type="submit">Register</button>
                    </form>
                    <p className={styles.signedUp}>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
            </div>
        </main>
    );
}

export default Signup;