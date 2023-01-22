import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function Login() {
    // const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    // function onFormSubmit(e) {
    //     e.preventDefault();
    //
    //     // navigate("/");
    //}
    return (
        <form onSubmit={login}>
            <div>formulier</div>
            <button type="submit">log in</button>
        </form>

    );
}

export default Login;