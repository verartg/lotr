import React, {useEffect, useState} from 'react';
import Aragorn from "../../assets/characters/Aragorn.jpg";
import Arwen from "../../assets/characters/Arwen.webp";
import Azog from "../../assets/characters/Azog.jpg";
import Balin from "../../assets/characters/Balin.webp";
import BardII from "../../assets/characters/BardII.jpg";
import Beorn from "../../assets/characters/Beorn.webp";
// import Bifur from "../../assets/characters/Bifur.webp";
// import BilboBaggins from "../../assets/characters/BilboBaggins.webp";
// import Bofur from "../../assets/characters/Bofur.webp";
// import Bombur from "../../assets/characters/Bombur.webp";
// import Boromir from "../../assets/characters/Boromir.webp";
// import Celeborn from "../../assets/characters/Celeborn.webp";
// import DenethorII from "../../assets/characters/DenethorII.webp";
// import Dori from "../../assets/characters/Dori.webp";
// import Dwalin from "../../assets/characters/Dwalin.webp";
// import Elrond from "../../assets/characters/Elrond.webp";
// import Éomer from "../../assets/characters/Éomer.webp";
// import Éowyn from "../../assets/characters/Éowyn.webp";
// import Faramir from "../../assets/characters/Faramir.webp";
// import FíliandKíli from "../../assets/characters/FíliandKíli.jpg";
// import FrodoBaggins from "../../assets/characters/FrodoBaggins.webp";
// import Galadriel from "../../assets/characters/Galadriel.webp";
// import Gandalf from "../../assets/characters/Gandalf.webp";
// import Gimli from "../../assets/characters/Gimli.webp";
// import Glóin from "../../assets/characters/Glóin.webp";
// import Gollum from "../../assets/characters/Gollum.webp";
// import GreatGoblin from "../../assets/characters/GreatGoblin.webp";
// import GrímaWormtongue from "../../assets/characters/GrímaWormtongue.jpg";
// import Haldir_Lorien from "../../assets/characters/Haldir_Lorien.webp";
// import Legolas from "../../assets/characters/Legolas.jpg";
// import MerryGamgee from "../../assets/characters/MerryGamgee.webp";
// import Nori from "../../assets/characters/Nori.webp";
// import Óin from "../../assets/characters/Óin.webp";
// import Ori from "../../assets/characters/Ori.webp";
// import PippinGamgee from "../../assets/characters/PippinGamgee.webp";
// import Radagast from "../../assets/characters/Radagast.jpg";
// import SamwiseGamgee from "../../assets/characters/SamwiseGamgee.jpg";
// import Saruman from "../../assets/characters/Saruman.jpg";
// import Smaug from "../../assets/characters/Smaug.webp";
// import Tauriel from "../../assets/characters/Tauriel.webp";
// import Théoden from "../../assets/characters/Théoden.jpg";
// import Thorin from "../../assets/characters/Thorin.webp";
// import Thranduil from "../../assets/characters/Thranduil.webp";
// import Treebeard from "../../assets/characters/Treebeard.webp";

function Testyourself2() {
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [clicked, setClicked] = useState(0);

    useEffect(() => {
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
                ];
                const randomNr = Math.floor(Math.random() * images.length);
                setImage(images[randomNr].image);
                setId(images[randomNr].id);
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

//onClick functie aanroepen ID meegeven getRequest
    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <div onClick={() => setClicked(clicked + 1)}>
                <img src={image} alt="image character"/>{id}
                {clicked === 1 && <div><p>Hier komt de character info</p></div>}
                {clicked === 2 && refreshPage()}

            </div>
        </>
    );
}

export default Testyourself2;