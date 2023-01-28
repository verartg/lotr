import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import styles from './Home.module.css';

function Home() {
    const {user, logout} = useContext(AuthContext);

    return (
        <div>
            <header>
            <h1 className={styles.elvish}>Hello {user}</h1>
            {/*<img/> hier moet nog een onclick, dropdownmenu met uitlog knop komen*/}
            <button onClick={logout}>Log out</button>
            </header>

            <section>
                <Link to="/characters">
                    <button>Characters</button>
                </Link>
                <Link to="/quotes">
                    <button>Quotes</button>
                </Link>
                <Link to="/testyourself">
                    <button>Test yourself</button>
                </Link>
            </section>
        </div>
    );
}

export default Home;