const CharactersFiltered = ({characters = []}) => {
    return (
        <div>
            {characters && characters.map((character) => {
                const { _id } = character
                return <p key={_id}>{character.name}</p>
            })}
        </div>
    );
};

export default CharactersFiltered;