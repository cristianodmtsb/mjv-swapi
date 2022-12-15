import { Routes, Route } from 'react-router-dom';
import { Characters } from '../pages/Characters';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Films } from '../pages/Films';
import { Starships } from '../pages/Starships';
import { Planets } from '../pages/Planets';
import { NotFound } from '../pages/NotFound';
import { CharacterProfile } from '../pages/CharacterProfile';
import { Register } from '../pages/Register';

export function RoutesMain() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='characters' element={<Characters />} />
            <Route path='starships' element={<Starships />} />
            <Route path='planets' element={<Planets />} />
            <Route path='films' element={<Films />} />
            <Route path='character-profile/:id' element={<CharacterProfile />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}