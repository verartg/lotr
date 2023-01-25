import React from 'react';
import confusedgandalf from '../../assets/confusedgandalf.gif';
function Notfound() {
    return (
        <div>
            <img src={confusedgandalf} alt="A confused Gandalf"/>
            <h1>I have no memory of this page</h1>
            <p>Seems like you are lost</p>
        </div>
    );
}

export default Notfound;