import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function Home() {
    const {isAuth, logout} = useContext(AuthContext);

    return (
        <>
            {isAuth ?
                <form onSubmit={logout}><button type="submit">log out</button></form> :
                <Link to="/login"><button>log in</button></Link>}
            {/*<img/>*/}
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