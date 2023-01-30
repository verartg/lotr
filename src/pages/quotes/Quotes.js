import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import tolkien from '../../assets/jrrtolkien.png';
import footerfellowship from '../../assets/footerfellowship.png';
import styles from './Quotes.module.css';
import arrowback from '../../assets/arrowback.svg'

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
            <header className="outer-content-container">
                <div className="inner-content-container">
                    <Link to="/"><img src={arrowback} alt="arrow to go back" className={styles.arrow}/></Link>
                </div>
            </header>
            <main>
                <div className="outer-content-container">
                    <div className="inner-content-container">
                        {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
                        {loading && <span>Loading...</span>}
                        <img className={styles.jrrt} src={tolkien} alt="Tolkien symbol" onClick={() => setClicked(clicked + 1)}/>
                        {clicked ?
                            <div>
                                <p className={styles.quote}>{quote}</p>
                                <p className={styles.author}>- {character}</p>
                            </div> :
                            <div>
                                <p className={styles.quote}>Tap the logo for a random quote</p>
                                <p className={styles.author}>- Vera</p>
                            </div>}
                    </div>
                </div>
            </main>
            <footer>
                <img src={footerfellowship} alt="footer outline of the fellowship of the ring"/>
            </footer>
        </>
    );
}

export default Quotes;