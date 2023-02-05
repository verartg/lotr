import React, {useEffect, useState} from 'react';
import Records from '../../records.json';
import axios from "axios";
import CharacterInformation from "../../components/characterInformation/CharacterInformation";
import Header from "../../components/header/Header";

function Testyourself2() {
    const [image, setImage] = useState();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [clicked, setClicked] = useState(0);
    const [character, setCharacter] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`
        }

        async function getImage() {
            toggleLoading(true);
            try {
                toggleError(false);
                const randomNr = Math.floor(Math.random() * Records.length);
                setImage(Records[randomNr].icon);
                const characterId = (Records[randomNr].id);
                const characterInfo = await axios.get(`https://the-one-api.dev/v2/character/${characterId}`, {
                    headers: headers
                });
                setCharacter(characterInfo.data.docs[0]);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        getImage();
    }, []);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <Header uri="/testyourself"></Header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    {error && <span>Something went wrong with retrieving the data</span>}
                    {loading && <span>Loading...</span>}
                    <div onClick={() => setClicked(clicked + 1)}>
                        {clicked === 0 && <CharacterInformation image={image}/>}
                        {clicked === 1 && <CharacterInformation image={image} character={character}/>}
                        {clicked === 2 && refreshPage()}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Testyourself2;