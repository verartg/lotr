//Current problems:
//once a filter is selected, it can't be changed. --> hij geeft alleen de opties die in de karakterlijst staan.
// ik set Race en Realm niet(ik weet niet hoe), waardoor ik soms niet kan clearen. dit is het geval wanneer er geen realm/race te kiezen valt. dan ververst 'ie niet.
//I probably need to use more components.
//I need pagination
import styles from './Characters.module.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBackOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import SearchBar from "../../components/searchbar/Searchbar";
import CharactersFiltered from "../../components/charactersfiltered/Charactersfiltered";
import arrowback from "../../assets/arrowback.svg";
import Header from "../../components/header/Header";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [allCharacters, setAllCharacters] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [race, setRace] = useState("default");
    const [realms, setRealms] = useState([]);
    const [races, setRaces] = useState([]);
    const [realm, setRealm] = useState("default");

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
            return `${character.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")}`.includes(keyword.toLowerCase())
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

    const clearFilters = () => {
        setRace('')
        setRealm('')
        setKeyword('')
    }

    return (
        <>
            {error && <span>Something went wrong with retrieving the data</span>}
            {loading && <span>Loading...</span>}
            <Header uri="/"></Header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    <div className={styles.filterblock}>
                    <SearchBar keyword={keyword} onChange={updateKeyword}/>
                    <div className={styles.filters}>
                        <select defaultValue={race} onChange={e => updateRace(e.target.value)}
                                className={styles.filter}>
                            {races.map((race, i) => (
                                <option value={race} key={i}>{race}</option>
                            ))}
                            <option value="default" disabled hidden>
                                Race
                            </option>
                        </select>
                        <select defaultValue={realm} onChange={e => updateRealm(e.target.value)}
                                className={styles.filter}>
                            {realms.map((realm, i) => (
                                <option value={realm} key={i}>{realm}</option>
                            ))}
                            <option value="default" disabled hidden>
                                Realm
                            </option>
                        </select>
                    </div>
                    <button onClick={clearFilters} className={styles.clear}>Clear All filters</button>
                    </div>
                    <CharactersFiltered characters={characters}/>
                </div>
            </main>
        </>
    );
}

export default Characters;