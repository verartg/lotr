//Current problems:
//searchbar and filters are not yet working together.
//once a filter is selected, it can't be changed.
//I probably need to use more components.
//I need pagination
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import SearchBar from "../../components/searchbar/Searchbar";
import CharactersFiltered from "../../components/charactersfiltered/Charactersfiltered";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [allCharacters, setAllCharacters] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [race, setRace] = useState("");
    const [realm, setRealm] = useState(null);

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
                const rawData = allData.data.docs;
//list from which we'll filter (I think)
                setCharacters(rawData);
//initial list
                setAllCharacters(rawData);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        const updateKeyword = (keyword) => {
            const filtered = allCharacters.filter(character => {
                return `${character.name.toLowerCase()}`.includes(keyword.toLowerCase());
            })
            setKeyword(keyword);
            setCharacters(filtered);
        }
//filterfunction based on race
        const filterByRace = race => {
            setCharacters(
                characters.filter(character => {
                    return character.race === race
                })
            )
        }
//filterfunction based on realm
        const filterByRealm = realm => {
            setCharacters(
                characters.filter(character => {
                    return character.realm === realm
                })
            )
        }
//to create an array with all the possible races
    const races = Array.from(
        new Set(characters.map(character => character.race))
    )

//to create an array with all the possible realms
    const realms = Array.from(
        new Set(characters.map(character => character.realm))
    )
//Inside the useEffect, we are checking if the race filter and realm filter is applied. We have a not check (!race and !realm), so that we can apply the filter only if that particular filter is selected.
    useEffect(() => {
        setCharacters(
            characters.filter(character => {
                return (
                    (!race || race === character.race) && (!realm || realm === character.realm)
                )
            })
        )
    }, [race, realm])

//this function clearFilters is not working... I also need to refresh the list when all the filters are cleared.
    const clearFilters = () => {
        setRace(null)
        setRealm(null)
        setKeyword('')
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
            <select onChange={e => filterByRace(e.target.value)}>
                <option value="" disabled default selected>
                    Select race
                </option>

                {races.map(race => {
                    return <option key={race}>{race}</option>
                })}
            </select>
            <select onChange={e => filterByRealm(e.target.value)}>
                <option value="" disabled default selected>
                    Select realm
                </option>

                {realms.map(realm => {
                    return <option key={realm}>{realm}</option>
                })}
            </select>
            <button onClick={clearFilters}>Clear All filters</button>
            <CharactersFiltered characters={characters} />
        </>
    );
}

export default Characters;