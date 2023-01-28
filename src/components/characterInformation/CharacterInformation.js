import React from 'react';
//if character.gender/race/realm/spouse === nan -> <p>unknown<//>
const CharacterInformation = ({character = {}}) => {
    return (
            <div>
                <h2>{character.name}</h2>
                <div>
                    <p>Gender: {character.gender}</p>
                    <p>Race: {character.race}</p>
                    <p>Realm: {character.realm}</p>
                    <p>Spouse: {character.spouse}</p>
                </div>
                <a href={character.wikiUrl}><p>Go to wiki page</p></a>
            </div>
    );
};

export default CharacterInformation;