//Current problems:
//once a filter is selected, it can't be changed. --> hij geeft alleen de opties die in de karakterlijst staan.
// ik set Race en Realm niet(ik weet niet hoe), waardoor ik soms niet kan clearen. dit is het geval wanneer er geen realm/race te kiezen valt. dan ververst 'ie niet.
//I probably need to use more components.
//I need pagination
//accenten gevoeligheid uitzetten.
import styles from './Characters.module.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import SearchBar from "../../components/searchbar/Searchbar";
import CharactersFiltered from "../../components/charactersfiltered/Charactersfiltered";
import FilterMenu from "../../components/filtermenu/FilterMenu";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [allCharacters, setAllCharacters] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [race, setRace] = useState(null);
    const [realms, setRealms] = useState([]);
    const [races, setRaces] = useState([]);
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
            setCharacters(rawData);
            setAllCharacters(rawData);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }
console.log(characters);

    useEffect(() => {
        getData();
    }, [race, realm]);

    //to create an array with all the possible races
    useEffect(() => {
        setRaces(Array.from(
            new Set(characters.map(character => character.race))
        ));
    }, [characters])
    // console.log(races);

    //to create an array with all the possible realms
    useEffect(() => {
        setRealms(Array.from(
            new Set(characters.map(character => character.realm))
        ));
    }, [characters])
    // console.log(realms);

    const updateKeyword = (keyword) => {
        const filtered = allCharacters.filter(character => {
            return `${character.name.toLowerCase()}`.includes(keyword.toLowerCase())
        });
        setKeyword(keyword);
        setCharacters(filtered);
    }
// console.log(keyword)
    function updateRace(e) {
        const filtered = allCharacters.filter(character => {
            return character.race === e
        });
        setCharacters(filtered);
    }
    // console.log(race);
//deze console geeft niks terug

    function updateRealm(e) {
        const filtered = allCharacters.filter(character => {
            return character.realm === e
        });
        setRealm(realm);
        setCharacters(filtered);
    }

    // console.log(realm);
//deze console geeft niks terug

// Inside the useEffect, we are checking if the race filter and realm filter is applied. We have a not check (!race and !realm), so that we can apply the filter only if that particular filter is selected.
//     useEffect(() => {
//         setCharacters(
//             characterImages.filter(character => {
//                 return (
//                     (!race || race === character.race) && (!realm || realm === character.realm)
//                 )
//             })
//         )
//     }, [race, realm])

//this function clearFilters is not working... I also need to refresh the list when all the filters are cleared.
    const clearFilters = () => {
        setRace('')
        setRealm('')
        setKeyword('')
    }

    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <Link to="/"><IoArrowBackOutline/></Link>
            <SearchBar keyword={keyword} onChange={updateKeyword}/>
            {/*<FilterMenu value='' keyRace={keyRace} onChange={updateRace}/>*/}

            <select value='' onChange={e => updateRace(e.target.value)}>
                {races.map((race) => (
                    <option value={race}>{race}</option>
                ))}
            </select>

            <select value='' onChange={e => updateRealm(e.target.value)}>
                {realms.map((realm) => (
                    <option value={realm}>{realm}</option>
                ))}
            </select>
            <button onClick={clearFilters}>Clear All filters</button>
            <CharactersFiltered characters={characters}/>
        </>
    );
}

export default Characters;