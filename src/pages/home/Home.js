import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function Home() {
    const {user, logout} = useContext(AuthContext);

    return (
        <>
            <h1>Hello {user}</h1>
            {/*<img/> hier moet nog een onclick, dropdownmenu met uitlog knop komen*/}
            <button onClick={logout}>Log out</button>
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
        </>
    );
}

export default Home;