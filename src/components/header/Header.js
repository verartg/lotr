import {Link} from "react-router-dom";
import styles from './Header.module.css';
import React from "react";
import arrowback from "../../assets/arrowback.svg";

function Header({uri}) {

    return (
        <header className="outer-content-container">
            <div className="inner-content-container">
                <Link to={uri}>
                    <img src={arrowback} alt="arrow to go back" className={styles.arrow}/>
                </Link>
            </div>
        </header>
    );
}

export default Header;