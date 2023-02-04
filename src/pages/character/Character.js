import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import CharacterInformation from "../../components/characterInformation/CharacterInformation";
import arrowback from '../../assets/arrowback.svg';
import styles from "./Character.module.css";
import sauronseye from "../../assets/sauronseye.jpg";
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
import Header from "../../components/header/Header";

function Character() {
    const {characterId} = useParams();
    const [character, setCharacter] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer FD_28OTI7VOOTV6kadUH'
        }
        async function getCharacter() {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://the-one-api.dev/v2/character/${characterId}`, {
                    headers: headers
                });
                setCharacter(response.data.docs[0]);
                switch (characterId) {
                    case '5cd99d4bde30eff6ebccfc15':
                        setImage(FrodoBaggins);
                        break;
                    case "5cd99d4bde30eff6ebccfbe6":
                        setImage(Aragorn);
                        break;
                    case "5cd99d4bde30eff6ebccfc07":
                        setImage(Arwen);
                        break;
                    case "5cdbdecb6dc0baeae48cfad4":
                        setImage(Azog)
                        break;
                    case "5cd99d4bde30eff6ebccfc1b":
                        setImage(Balin)
                        break;
                    case "5cd99d4bde30eff6ebccfc22":
                        setImage(BardII)
                        break;
                    case "5cd99d4bde30eff6ebccfc2c":
                        setImage(Beorn)
                        break;
                    case "5cd99d4bde30eff6ebccfc37":
                        setImage(Bifur)
                        break;
                    case "5cd99d4bde30eff6ebccfc38":
                        setImage(BilboBaggins)
                        break;
                    case "5cd99d4bde30eff6ebccfc4f":
                        setImage(Bofur)
                        break;
                    case "5cd99d4bde30eff6ebccfc54":
                        setImage(Bombur)
                        break;
                    case "5cd99d4bde30eff6ebccfc57":
                        setImage(Boromir)
                        break;
                    case "5cd99d4bde30eff6ebccfc7e":
                        setImage(Celeborn)
                        break;
                    case "5cd99d4bde30eff6ebccfc9a":
                        setImage(DenethorII)
                        break;
                    case "5cd99d4bde30eff6ebccfc9f":
                        setImage(Dori)
                        break;
                    case "5cd99d4bde30eff6ebccfca4":
                        setImage(Dwalin)
                        break;
                    case "5cd99d4bde30eff6ebccfcc8":
                        setImage(Elrond)
                        break;
                    case "5cdbdecb6dc0baeae48cfa5a":
                        setImage(Éomer)
                        break;
                    case "5cdbdecb6dc0baeae48cfa59":
                        setImage(Éowyn)
                        break;
                    case "5cd99d4bde30eff6ebccfcef":
                        setImage(Faramir)
                        break;
                    case "5cd99d4bde30eff6ebccfd04":
                        setImage(FíliandKíli)
                        break;
                    case "5cd99d4bde30eff6ebccfd06":
                        setImage(Galadriel)
                        break;
                    case "5cd99d4bde30eff6ebccfea0":
                        setImage(Gandalf)
                        break;
                    case "5cd99d4bde30eff6ebccfd23":
                        setImage(Gimli)
                        break;
                    case "5cd99d4bde30eff6ebccfd2b":
                        setImage(Glóin)
                        break;
                    case "5cd99d4bde30eff6ebccfe9e":
                        setImage(Gollum)
                        break;
                    case "5cdbdecb6dc0baeae48cfa95":
                        setImage(GreatGoblin)
                        break;
                    case "5cd99d4bde30eff6ebccfe9d":
                        setImage(GrímaWormtongue)
                        break;
                    case "5cd99d4bde30eff6ebccfd42":
                        setImage(Haldir_Lorien)
                        break;
                    case "5cd99d4bde30eff6ebccfd81":
                        setImage(Legolas)
                        break;
                    case "5cd99d4bde30eff6ebccfc7c":
                        setImage(MerryGamgee)
                        break;
                    case "5cd99d4bde30eff6ebccfdc4":
                        setImage(Nori)
                        break;
                    case "5cd99d4bde30eff6ebccfe55":
                        setImage(Óin)
                        break;
                    case "5cd99d4bde30eff6ebccfdca":
                        setImage(Ori)
                        break;
                    case "5cd99d4bde30eff6ebccfe2e":
                        setImage(PippinGamgee)
                        break;
                    case "5cd99d4bde30eff6ebccfea1":
                        setImage(Radagast)
                        break;
                    case "5cd99d4bde30eff6ebccfd0d":
                        setImage(SamwiseGamgee)
                        break;
                    case "5cd99d4bde30eff6ebccfea4":
                        setImage(Saruman)
                        break;
                    case "5cdbdecb6dc0baeae48cfa42":
                        setImage(Smaug)
                        break;
                        case "5cd99d4bde30eff6ebccfe19":
                        setImage(Théoden)
                        break;
                    case "5cd99d4bde30eff6ebccfe15":
                        setImage(Thorin)
                        break;
                    case "5cd99d4bde30eff6ebccfe13":
                        setImage(Thranduil)
                        break;
                    case "5cd9d533844dc4c55e47afed":
                        setImage(Treebeard)
                        break;
                    default:
                        setImage(sauronseye);
                }
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (true) {
            getCharacter();
        }
    }, []);
console.log(characterId)
    return (
        <>
            <Header uri="/characters"></Header>
            <main className="outer-content-container">
                <div className="inner-content-container">
                    {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
                    {loading && <span>Loading...</span>}
                    <CharacterInformation character={character} image={image}/>
                </div>
            </main>
        </>
    );
}

export default Character;