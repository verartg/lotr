import React, {useEffect, useState} from 'react';
import Aragorn from "../../assets/characterImages/Aragorn.jpg";
import Arwen from "../../assets/characterImages/Arwen.webp";
import Azog from "../../assets/characterImages/Azog.jpg";
import Balin from "../../assets/characterImages/Balin.webp";
import BardII from "../../assets/characterImages/BardII.jpg";
import Beorn from "../../assets/characterImages/Beorn.webp";
import Bifur from "../../assets/characterImages/Bifur.webp";
import BilboBaggins from "../../assets/characterImages/BilboBaggins.webp";
import Bofur from "../../assets/characterImages/Bofur.webp";
import Bombur from "../../assets/characterImages/Bombur.webp";
import Boromir from "../../assets/characterImages/Boromir.webp";
import Celeborn from "../../assets/characterImages/Celeborn.webp";
import DenethorII from "../../assets/characterImages/DenethorII.webp";
import Dori from "../../assets/characterImages/Dori.webp";
import Dwalin from "../../assets/characterImages/Dwalin.webp";
import Elrond from "../../assets/characterImages/Elrond.webp";
import Éomer from "../../assets/characterImages/Éomer.webp";
import Éowyn from "../../assets/characterImages/Éowyn.webp";
import Faramir from "../../assets/characterImages/Faramir.webp";
import FíliandKíli from "../../assets/characterImages/FíliandKíli.jpg";
import FrodoBaggins from "../../assets/characterImages/FrodoBaggins.webp";
import Galadriel from "../../assets/characterImages/Galadriel.webp";
import Gandalf from "../../assets/characterImages/Gandalf.webp";
import Gimli from "../../assets/characterImages/Gimli.webp";
import Glóin from "../../assets/characterImages/Glóin.webp";
import Gollum from "../../assets/characterImages/Gollum.webp";
import GreatGoblin from "../../assets/characterImages/GreatGoblin.webp";
import GrímaWormtongue from "../../assets/characterImages/GrímaWormtongue.jpg";
import Haldir_Lorien from "../../assets/characterImages/Haldir_Lorien.webp";
import Legolas from "../../assets/characterImages/Legolas.jpg";
import MerryGamgee from "../../assets/characterImages/MerryGamgee.webp";
import Nori from "../../assets/characterImages/Nori.webp";
import Óin from "../../assets/characterImages/Óin.webp";
import Ori from "../../assets/characterImages/Ori.webp";
import PippinGamgee from "../../assets/characterImages/PippinGamgee.webp";
import Radagast from "../../assets/characterImages/Radagast.jpg";
import SamwiseGamgee from "../../assets/characterImages/SamwiseGamgee.jpg";
import Saruman from "../../assets/characterImages/Saruman.jpg";
import Smaug from "../../assets/characterImages/Smaug.webp";
import Théoden from "../../assets/characterImages/Théoden.jpg";
import Thorin from "../../assets/characterImages/Thorin.webp";
import Thranduil from "../../assets/characterImages/Thranduil.webp";
import Treebeard from "../../assets/characterImages/Treebeard.webp";
import axios from "axios";
import CharacterInformation from "../../components/characterInformation/CharacterInformation";
import {Link} from "react-router-dom";
import arrowback from "../../assets/arrowback.svg";
import styles from "../character/Character.module.css";

function Testyourself2() {
    const [image, setImage] = useState();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [clicked, setClicked] = useState(0);
    const [character, setCharacter] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }

        async function getImage() {
            toggleLoading(true);
            try {
                toggleError(false);
                const images = [
                    {
                        "image": Aragorn,
                        "id": "5cd99d4bde30eff6ebccfbe6"
                    },
                    {
                        "image": Arwen,
                        "id": "5cd99d4bde30eff6ebccfc07"
                    },
                    {
                        "image": Azog,
                        "id": "5cdbdecb6dc0baeae48cfad4"
                    },
                    {
                        "image": Balin,
                        "id": "5cd99d4bde30eff6ebccfc1b"
                    },
                    {
                        "image": BardII,
                        "id": "5cd99d4bde30eff6ebccfc22"
                    },
                    {
                        "image": Beorn,
                        "id": "5cd99d4bde30eff6ebccfc2c"
                    },
                    {
                        "image": Bifur,
                        "id": "5cd99d4bde30eff6ebccfc37"
                    },
                    {
                        "image": BilboBaggins,
                        "id": "5cd99d4bde30eff6ebccfc38"
                    },
                    {
                        "image": Bofur,
                        "id": "5cd99d4bde30eff6ebccfc4f"
                    },
                    {
                        "image": Bombur,
                        "id": "5cd99d4bde30eff6ebccfc54"
                    },
                    {
                        "image": Boromir,
                        "id": "5cd99d4bde30eff6ebccfc57"
                    },
                    {
                        "image": Celeborn,
                        "id": "5cd99d4bde30eff6ebccfc7e"
                    },
                    {
                        "image": DenethorII,
                        "id": "5cd99d4bde30eff6ebccfc9a"
                    },
                    {
                        "image": Dori,
                        "id": "5cd99d4bde30eff6ebccfc9f"
                    },
                    {
                        "image": Dwalin,
                        "id": "5cd99d4bde30eff6ebccfca4"
                    },
                    {
                        "image": Elrond,
                        "id": "5cd99d4bde30eff6ebccfcc8"
                    },
                    {
                        "image": Éomer,
                        "id": "5cdbdecb6dc0baeae48cfa5a"
                    },
                    {
                        "image": Éowyn,
                        "id": "5cdbdecb6dc0baeae48cfa59"
                    },
                    {
                        "image": Faramir,
                        "id": "5cd99d4bde30eff6ebccfcef"
                    },
                    {
                        "image": FíliandKíli,
                        "id": "5cd99d4bde30eff6ebccfd04"
                    },
                    {
                        "image": FrodoBaggins,
                        "id": "5cd99d4bde30eff6ebccfc15"
                    },
                    {
                        "image": Galadriel,
                        "id": "5cd99d4bde30eff6ebccfd06"
                    },
                    {
                        "image": Gandalf,
                        "id": "5cd99d4bde30eff6ebccfea0"
                    },
                    {
                        "image": Gimli,
                        "id": "5cd99d4bde30eff6ebccfd23"
                    },
                    {
                        "image": Glóin,
                        "id": "5cd99d4bde30eff6ebccfd2b"
                    },
                    {
                        "image": Gollum,
                        "id": "5cd99d4bde30eff6ebccfe9e"
                    },
                    {
                        "image": GreatGoblin,
                        "id": "5cdbdecb6dc0baeae48cfa95"
                    },
                    {
                        "image": GrímaWormtongue,
                        "id": "5cd99d4bde30eff6ebccfe9d"
                    },
                    {
                        "image": Haldir_Lorien,
                        "id": "5cd99d4bde30eff6ebccfd42"
                    },
                    {
                        "image": Legolas,
                        "id": "5cd99d4bde30eff6ebccfd81"
                    },
                    {
                        "image": MerryGamgee,
                        "id": "5cd99d4bde30eff6ebccfc7c"
                    },
                    {
                        "image": Nori,
                        "id": "5cd99d4bde30eff6ebccfdc4"
                    },
                    {
                        "image": Óin,
                        "id": "5cd99d4bde30eff6ebccfe55"
                    },
                    {
                        "image": Ori,
                        "id": "5cd99d4bde30eff6ebccfdca"
                    },
                    {
                        "image": PippinGamgee,
                        "id": "5cd99d4bde30eff6ebccfe2e"
                    },
                    {
                        "image": Radagast,
                        "id": "5cd99d4bde30eff6ebccfea1"
                    },
                    {
                        "image": SamwiseGamgee,
                        "id": "5cd99d4bde30eff6ebccfd0d"
                    },
                    {
                        "image": Saruman,
                        "id": "5cd99d4bde30eff6ebccfea4"
                    },
                    {
                        "image": Smaug,
                        "id": "5cdbdecb6dc0baeae48cfa42"
                    },
                    {
                        "image": Théoden,
                        "id": "5cd99d4bde30eff6ebccfe19"
                    },
                    {
                        "image": Thorin,
                        "id": "5cd99d4bde30eff6ebccfe15"
                    },
                    {
                        "image": Thranduil,
                        "id": "5cd99d4bde30eff6ebccfe13"
                    },
                    {
                        "image": Treebeard,
                        "id": "5cd9d533844dc4c55e47afed"
                    }

                ];
                const randomNr = Math.floor(Math.random() * images.length);
                setImage(images[randomNr].image);
                const characterId = (images[randomNr].id);
                const characterInfo = await axios.get(`https://the-one-api.dev/v2/character/${characterId}`, {
                    headers: headers
                });
                console.log(characterInfo);
                setCharacter(characterInfo.data.docs[0]);
                console.log(characterInfo.data.docs[0]);

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
            <header className="outer-content-container">
                <div className="inner-content-container">
                    <Link to="/characters"><img src={arrowback} alt="arrow to go back"
                                                className={styles.filter}/></Link>
                </div>
            </header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
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