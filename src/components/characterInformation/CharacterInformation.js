import styles from './CharacterInformation.module.css'

const CharacterInformation = ({character = {}, image } ) => {

    return (
        <div className={styles.card}>
            <div className={styles.headerCard}>
                <img src={image} className={styles.sauron} alt="photo of character"/>
                <h2 className={styles.name}>{character.name}</h2>
            </div>
            <div className={styles.infoCard}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Gender: </th>
                            <td>{(character.gender === "NaN" || character.gender === "") ? "Unknown" : character.gender}</td>
                        </tr>
                        <tr>
                            <th>Race: </th>
                            <td>{(character.race === "NaN" || character.race === "") ? "Unknown" : character.race}</td>
                        </tr>
                        <tr>
                            <th>Realm: </th>
                            <td>{(character.realm === "NaN" || character.realm === "") ? "Unknown" : character.realm}</td>
                        </tr>
                        <tr>
                            <th>Spouse: </th>
                            <td>{(character.spouse === "NaN" || character.spouse === "") ? "Unknown" : character.spouse}</td>
                        </tr>
                        </tbody>
                    </table>
                    <a href={character.wikiUrl} ><p className={styles.link}>Go to wiki page</p></a>
            </div>
        </div>
    );
};

export default CharacterInformation;