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
import Layout from "./layout";
function App() {
    const {isAuth} = useContext(AuthContext);

    return (
            <Routes>
                <Route path="/" element={isAuth ? <Layout backgroundColor="#3D2529"><Home/></Layout> : <Navigate to="/signup"/>}/>
                <Route path="/login" element={<Layout backgroundColor="#091121"><Login/></Layout>}/>
                <Route path="signup" element={<Layout backgroundColor="#091121"><Signup/></Layout>}/>
                <Route path="/characters" element={isAuth ? <Layout backgroundColor="#253021"><Characters/></Layout> : <Navigate to="/signup"/>}/>
                <Route path="/character/:characterId" element={isAuth ? <Layout backgroundColor="#2D2E2D"><Character/></Layout> : <Navigate to="/signup"/>}/>
                <Route path="/quotes" element={isAuth ? <Layout backgroundColor="#deeade"> <Quotes/> </Layout> : <Navigate to="/signup"/>}/>
                <Route path="/testyourself" element={isAuth ? <Layout backgroundColor="#6B6B6B"><Testyourself/></Layout> : <Navigate to="/signup"/>}/>
                <Route path="/testyourself2" element={isAuth ? <Layout backgroundColor="#6B6B6B"><Testyourself2/></Layout> : <Navigate to="/signup"/>}/>
                <Route path="*" element={<Layout backgroundColor="#EEE8E9"><Notfound/></Layout>}/>
            </Routes>
    );
}

export default App;
