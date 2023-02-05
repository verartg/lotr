import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Testyourself.module.css";
import Header from "../../components/header/Header";

function Testyourself() {
    return (
        <>
            <Header uri="/"></Header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    <Link to="/testyourself2">
                        <div className={styles.card}>
                            <p className={styles.p}>Can you guess the character?</p>
                            <p className={styles.p}>Tap to start</p>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Testyourself;