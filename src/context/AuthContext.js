//helperfunctie maken van unixtimestamp && Math.floor(Date.now()/1000) < decodedToken.exp
import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if ( storedToken ) {
            console.log("De gebruiker is NOG STEEDS ingelogd!")
            fetchUserData( storedToken )

        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done'
            })
        }
    }, []);

    function login(jwt) {
        localStorage.setItem('token', jwt)
        fetchUserData( jwt, "/");
    }

    async function fetchUserData(jwt, redirect) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                },
            });
            toggleIsAuth({
                isAuth: true,
                user: response.data.username,
                status: "done"
            });
            if (redirect) {
                navigate(redirect)
            }
            console.log(response)
        } catch (e) {
            console.error(e)
            console.log(e.response)
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done"
            });
            //stukje state aanmaken om de errors in de ui te loggen.
        }
    }

    function logout() {
        console.log("De gebruiker is uitgelogd!")
        localStorage.removeItem('token')
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done"
        });
        navigate("/login")
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        status: isAuth.status,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={data}>
            { isAuth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider