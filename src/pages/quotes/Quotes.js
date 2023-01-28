import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import tolkien from '../../assets/jrrtolkien.png';
import arrow from '../../assets/arrrowback.png';
import { IoArrowBackOutline } from "react-icons/io5";
function Quotes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [quote, setQuote] = useState([]);
    const [character, setCharacter] = useState([]);
    const [clicked, setClicked] = useState(0);

        useEffect(() => {
            const headers = {
                'Accept': 'application/json',
                'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
            }

            async function getData() {
                toggleLoading(true);
                try {
                    toggleError(false);
                    const quotes = await axios.get('https://the-one-api.dev/v2/quote', {
                        headers: headers
                    });

                    const arrayQuotes = quotes.data.docs;
                    const randomNr = Math.floor(Math.random() * arrayQuotes.length);
                    setQuote(quotes.data.docs[randomNr].dialog);
                    const characterId = (quotes.data.docs[randomNr].character);
                    const characterInfo = await axios.get(`https://the-one-api.dev/v2/character/${characterId}`, {
                        headers: headers
                    });
                    console.log(characterInfo);
                    setCharacter(characterInfo.data.docs[0].name);

                } catch (e) {
                    console.error(e);
                    toggleError(true);
                }
                toggleLoading(false);
            }

            if (true) {
                getData();
            }

        }, [clicked]);

    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <Link to="/"><IoArrowBackOutline/></Link>
            <img src={tolkien} alt="Tolkien symbol" onClick={() => setClicked(clicked + 1)}/>
            {clicked ? <div><blockquote>{quote}</blockquote><cite>- {character}</cite></div> : <div><blockquote>Tap the logo for a random quote</blockquote><cite>- Vera</cite></div>}
        </>
    );
}

export default Quotes;