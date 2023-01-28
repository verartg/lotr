import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Notfound from '../src/pages/notfound/Notfound';
import Characters from '../src/pages/characters/Characters';
import Quotes from '../src/pages/quotes/Quotes';
import Testyourself from '../src/pages/testyourself/Testyourself';
import Login from '../src/pages/login/Login';
import Character from "./pages/character/Character";
import Signup from "./pages/signup/Signup";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Testyourself2 from "./pages/testyourself/testyourself2";
import './App.css';
function App() {
    const {isAuth} = useContext(AuthContext);

    return (
            <Routes>
                <Route path="/" element={isAuth ? <Home/> : <Navigate to="/signup"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="/characters" element={isAuth ? <Characters/> : <Navigate to="/signup"/>}/>
                <Route path="/character/:characterId" element={isAuth ? <Character/> : <Navigate to="/signup"/>}/>
                <Route path="/quotes" element={isAuth ? <Quotes/> : <Navigate to="/signup"/>}/>
                <Route path="/testyourself" element={isAuth ? <Testyourself/> : <Navigate to="/signup"/>}/>
                <Route path="/testyourself2" element={isAuth ? <Testyourself2/> : <Navigate to="/signup"/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
    );
}

export default App;
