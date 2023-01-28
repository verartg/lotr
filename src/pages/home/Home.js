import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './Home.module.css';
import lotrlogo from '../../assets/lotrlogo.png';
import placeholderphoto from '../../assets/placeholderphoto.jpeg';
import styles from './Home.module.css';

function Home() {
    const {user, logout} = useContext(AuthContext);

    return (
        <>
            <header>
                <div className={styles.margindiv}>
                    <div className={styles.nav}>
                        <ul>
                            <h2 className={styles.elvish}>Hello {user}!</h2>
                            {/*<img/> hier moet nog een onclick, dropdownmenu met uitlog knop komen*/}
                            <img src={placeholderphoto} alt="placeholder for personalised avatar" style={{
                                width: 40,
                                height: 40,
                                borderRadius: 40 / 2
                            }} onClick={logout}/>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className={styles.margindiv}>
                    <img src={lotrlogo} alt="Lord of the Rings logo"/>
                </div>
                <section>
                    <div className={styles.margindiv}>
                        <div className={styles.menu}>
                            <ol>
                                <Link to="/characters">
                                    <button>
                                        <p>Characters</p>
                                    </button>
                                </Link>
                                <Link to="/quotes">
                                    <button><p>Quotes</p></button>
                                </Link>
                                <Link to="/testyourself">
                                    <button><p>Test yourself</p></button>
                                </Link>
                            </ol>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;