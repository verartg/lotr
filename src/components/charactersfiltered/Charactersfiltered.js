import styles from './Charactersfiltered.module.css';
import {Link} from "react-router-dom";
import sauronseye from "../../assets/sauronseye.jpg";

const CharactersFiltered = ({characters = []}) => {
    return (
        <section className={styles.cardContainer}>
            {characters && characters.map((character) => {
                const {_id} = character
                return (
                        <Link to={`/character/${_id}`}>
                            <article className={styles.card} key={_id}><img src={sauronseye} className={styles.avatar} alt="the ring and saurons eye"/>{character.name}</article>
                        </Link>
                );
            })}
        </section>
    );
}

export default CharactersFiltered;