import React from 'react';
import styles from "../../pages/signup/Signup.module.css";

function Inputlabel(htmlFor, id, value, setUsername, name, placeholder) {
    return (
        <label className={styles.field} htmlFor={htmlFor}>
            <input className={styles.input}
                   id={id}
                   value={value}
                   onChange={(e) => setUsername(e.target.value)}
                   name={name}
                   placeholder={placeholder}/>
        </label>
    );
}

export default Inputlabel();