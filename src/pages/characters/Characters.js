import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import SearchBar from "../../components/searchbar/Searchbar";
import Charactersfiltered from "../../components/charactersfiltered/Charactersfiltered";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [allcharacters, setAllcharacters] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }

        async function getData() {
            toggleLoading(true);
            try {
                toggleError(false);
                const allData = await axios.get(`https://the-one-api.dev/v2/character`, {
                    headers: headers
                });
                const stortedStories = allData.data.docs;
                setCharacters(stortedStories);
                setAllcharacters(stortedStories);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        const updateKeyword = (keyword) => {
            const filtered = allcharacters.filter(character => {
                return `${character.name.toLowerCase()}`.includes(keyword.toLowerCase());
            })
            setKeyword(keyword);
            setCharacters(filtered);
        }

        useEffect(() => {
            getData();
    }, []);

    console.log(characters);

    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <Link to="/"><IoArrowBackOutline/></Link>
            <SearchBar keyword={keyword} onChange={updateKeyword}/>
            <Charactersfiltered characters={characters} />
        </>
    );
}

export default Characters;