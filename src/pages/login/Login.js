import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function onFormSubmit(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div>formulier</div>
    );
}

export default Login;