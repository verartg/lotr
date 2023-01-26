import React from 'react';
import {Link} from "react-router-dom";

function Testyourself() {
    return (
        <Link to="/testyourself2">
        <button>
           <h4>Can you guess the character?</h4>
            <h4>Tap to start</h4>
        </button>
        </Link>
    );
}

export default Testyourself;