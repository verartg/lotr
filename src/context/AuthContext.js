import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        console.log("De gebruiker is ingelogd!")
        toggleIsAuth(true);
        navigate("/");
    }

    function logout() {
        console.log("De gebruiker is uitgelogd!")
        toggleIsAuth(false);
        navigate("/login")
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider