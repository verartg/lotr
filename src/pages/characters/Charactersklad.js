import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
// import SearchBar from "../../components/searchbar/Searchbar";


const Characters = () => {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nrCharacters, setNrCharacters] = useState();
    //  const [allCharacters, setAllCharacters] = useState([]);
    const [limitPerPage, setLimitPerPage] = useState(50);
    const [nrPages, setNrPages] = useState(19);
    //  const [keyword, setKeyword] = useState('');

    // const updateKeyword = (keyword) => {
    //     const filtered = allCharacters.filter(characta => {
    //         return `${character.name.toLowerCase()}`.includes(keyword.toLowerCase());
    //     })
    //     setKeyword(keyword);
    //     setAllCharacters(filtered);
    // }
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }

        async function getData() {
            toggleLoading(true);
            try {
                toggleError(false);
                const result = await axios.get(`https://the-one-api.dev/v2/character?page=${currentPage}&limit=${limitPerPage}`, {
                    headers: headers
                });
                setCharacters(result.data.docs);
                const allData = await axios.get(`https://the-one-api.dev/v2/character`, {
                    headers: headers
                });
                //              setAllCharacters(allData.data.docs);
                setNrCharacters(allData.data.docs.length);
                setLimitPerPage(50);
                setNrPages(Math.ceil(nrCharacters/limitPerPage));
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
//om deze weer door te linken naar de specifieke character pagina, moet ik vb van reddit erbij pakken!
                    })}
                </ul>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === nrPages}> Next</button>
            </div>
        </>
    );
}//<SearchBar keyword={keyword} onChange={updateKeyword} />

export default Characters;