import React from 'react';
import {Link} from "react-router-dom";
import arrowback from "../../assets/arrowback.svg";
import styles from "./Testyourself.module.css";

function Testyourself() {
    return (
        <>
            <header className="outer-content-container">
                <div className="inner-content-container">
                    <Link to="/characters"><img src={arrowback} alt="arrow to go back"
                                                className={styles.filter}/></Link>
                </div>
            </header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    <Link to="/testyourself2">
                        <div className={styles.card}>
                            <h4>Can you guess the character?</h4>
                            <h4>Tap to start</h4>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Testyourself;