const Charactersfiltered = ({characters = []}) => {
    return (
        <div>
            {characters && characters.map((character) => {
                return <p>{character.name}</p>
            })}
        </div>
    );
};

export default Charactersfiltered;