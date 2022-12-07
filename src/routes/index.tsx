import { Routes, Route } from 'react-router-dom';
import { Characters } from '../pages/Characters';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { Planets } from '../pages/Planets';
import { Register } from '../pages/Register';
import { Ships } from '../pages/Ships';

export function RoutesMain() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='characters' element={<Characters />} />
            <Route path='ships' element={<Ships />} />
            <Route path='planets' element={<Planets />} />
            <Route path='movies' element={<Movies />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}