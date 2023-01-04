import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

const Characters = () => {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(50);
    const [numberCharacters, setNumberCharacters] = useState();

    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }

        async function getData() {
            toggleLoading(true);
            try {
                toggleError(false);
                const result = await axios.get(`https://the-one-api.dev/v2/character?page=${currentPage}&limit=${limit}`, {
                    headers: headers
                });
                const characters = result.data.docs;
                setCharacters(characters);
                const allCharacters = await axios.get(`https://the-one-api.dev/v2/character?page=${currentPage}&limit=1000`, {
                    headers: headers
                });
                const numberCharacters = allCharacters.data.docs;
                setNumberCharacters(numberCharacters);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (true) {
            getData();
        }

    }, [currentPage]);


    return (
        <>

            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <Link to="/"><IoArrowBackOutline/></Link>
            <div>
                <ul>
                    {characters.map((character) => {
                        return <p>{character.name}</p>
                    })}
                </ul>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.floor(numberCharacters / limit)}> Next</button>
            </div>
        </>

    );
}

export default Characters;