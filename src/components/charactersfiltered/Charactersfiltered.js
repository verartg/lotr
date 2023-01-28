import './Charactersfiltered.module.css'
import {Link} from "react-router-dom";

const CharactersFiltered = ({characters = []}) => {
    return (
        <div className="cards">
            {characters && characters.map((character) => {
                const {_id} = character
                return (
                    <div>
                        <Link to={`/character/${_id}`}>
                            <p className="card" key={_id}>{character.name}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CharactersFiltered;