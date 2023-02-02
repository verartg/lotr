import styles from './Charactersfiltered.module.css'
import {Link} from "react-router-dom";

const CharactersFiltered = ({characters = []}) => {
    return (
        <section className={styles.cardContainer}>
            {characters && characters.map((character) => {
                const {_id} = character
                return (
                        <Link to={`/character/${_id}`}>
                            <article className={styles.card} key={_id}>{character.name}</article>
                        </Link>
                );
            })}
        </section>
    );
};

export default CharactersFiltered;