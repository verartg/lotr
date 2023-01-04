import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
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