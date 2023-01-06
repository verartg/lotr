import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Notfound from '../src/pages/notfound/Notfound';
import Characters from '../src/pages/characters/Characters';
import Quotes from '../src/pages/quotes/Quotes';
import Testyourself from '../src/pages/testyourself/Testyourself';
import Login from '../src/pages/login/Login';
import Character from "./pages/character/Character";
function App() {


    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/character/:characterId" element={<Character/>}/>
                <Route path="/quotes" element={<Quotes/>}/>
                <Route path="/testyourself" element={<Testyourself/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
    );
}

export default App;
