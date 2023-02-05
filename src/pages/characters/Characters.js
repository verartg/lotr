import styles from './Characters.module.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchBar from "../../components/searchbar/Searchbar";
import CharactersFiltered from "../../components/charactersfiltered/Charactersfiltered";
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
        'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`
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

    useEffect(() => {
        getData();
    }, [race, realm]);

    useEffect(() => {
        setRaces(Array.from(
            new Set(characters.map(character => character.race))
        ));
    }, [characters])

    useEffect(() => {
        setRealms(Array.from(
            new Set(characters.map(character => character.realm))
        ));
    }, [characters])

    const updateKeyword = (keyword) => {
        const filtered = allCharacters.filter(character => {
            return `${character.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")}`.includes(keyword.toLowerCase())
        });
        setKeyword(keyword);
        setCharacters(filtered);
    }

    function updateRace(e) {
        const filtered = allCharacters.filter(character => {
            return character.race === e
        });
        setCharacters(filtered);
    }

    function updateRealm(e) {
        const filtered = allCharacters.filter(character => {
            return character.realm === e
        });
        setRealm(realm);
        setCharacters(filtered);
    }

    function clearFilters() {
        window.location.reload(false);
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