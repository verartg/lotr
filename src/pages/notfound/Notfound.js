import React from 'react';
import confusedgandalf from '../../assets/confusedgandalf.gif';
import styles from './Notfound.module.css'
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
function Notfound() {
    return (
        <main>
        <div className="outer-content-container">
            <div className="inner-content-container">
                <div className={styles.centering}>
                <img className={styles.gandalf} src={confusedgandalf} alt="A confused Gandalf"/>
                <h2 className={styles.text}>I have no memory of this page</h2>
                <p className={styles.text}>Seems like you are lost</p>
                <Button backgroundColor="#2D2E2D" uri={"/"}>
                    <p className={styles.beige}>Return to the Shire</p>
                </Button>
                </div>
            </div>
            </div>
        </main>
    );
}

export default Notfound;