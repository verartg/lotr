import React from 'react';
import styles from "../../pages/home/Home.module.css";
import {Link} from "react-router-dom";

function Button({ backgroundColor = "#fff", uri, children}) {
    return (
        <Link to={uri}>
            <article style={{ backgroundColor }} className={styles.button}>
                {children}
            </article>
        </Link>
    );
}

export default Button;