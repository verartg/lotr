import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Home.module.css';
import lotrlogo from '../../assets/lotrlogo.png';
import placeholderphoto from '../../assets/placeholderphoto.jpeg';
import styles from './Home.module.css';
import Button from "../../components/button/Button";

function Home() {
    const {user, logout} = useContext(AuthContext);

    return (
        <>
            <header className="outer-content-container">
                <div className="inner-content-container">
                    <ul className={styles.ul}>
                        <h2 className={styles.elvish}>Hello {user}!</h2>
                        {/*<img/> hier moet nog een onclick, dropdownmenu met uitlog knop komen*/}
                        <img src={placeholderphoto} alt="placeholder for personalised avatar" style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40 / 2
                        }} onClick={logout}/>
                    </ul>
                </div>
            </header>
            <main>
                <div className="outer-content-container">
                    <div className="inner-content-container">
                        <img className="logo" src={lotrlogo} alt="Lord of the Rings logo"/>
                        <section className={styles.menu}>
                            <Button backgroundColor="#efebec" uri={"/characters"}>
                                <p>Characters</p>
                            </Button>
                            <Button backgroundColor="#efebec" uri={"/quotes"}>
                                <p>Quotes</p>
                            </Button>
                            <Button backgroundColor="#efebec" uri={"/testyourself"}>
                                <p>Test yourself</p>
                            </Button>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;