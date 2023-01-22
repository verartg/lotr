import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function Character() {
    const { characterId } = useParams();
    const [character, setCharacter] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }
        async function getCharacter() {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://the-one-api.dev/v2/character/${characterId}`, {
                    headers: headers
                });
                setCharacter(response.data.docs[0]);
                console.log(response.data.docs[0]);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (true) {
            getCharacter();
        }

    }, []);
console.log(character);
    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <h2>{character.name}</h2>
            <div>
                <p>Gender: {character.gender}</p>
                <p>Race: {character.race}</p>
                <p>Realm: {character.realm}</p>
                <p>Spouse: {character.spouse}</p>
            </div>
            <a href={character.wikiUrl}><p>Go to wiki page</p></a>
        </>
    );
}

export default Character;