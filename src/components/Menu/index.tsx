import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Menu() {
    return (
        <Container>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='characters'>Personagens</Link></li>
                <li><Link to='starships'>Naves</Link></li>
                <li><Link to='planets'>Planetas</Link></li>
                <li><Link to='films'>Filmes</Link></li>
            </ul>

            <ul>
                <li><Link to='register'>Criar Conta</Link></li>
                <li><Link to='login'>Login</Link></li>
            </ul>
        </Container>
    )
}