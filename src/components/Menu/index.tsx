import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Menu() {
    return (
        <Container>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='characters'>Personagens</Link></li>
                <li><Link to='ships'>Naves</Link></li>
                <li><Link to='planets'>Planetas</Link></li>
                <li><Link to='movies'>Filmes</Link></li>
            </ul>

            <ul>
                <li><Link to='register'>Criar Conta</Link></li>
                <li><Link to='login'>Login</Link></li>
            </ul>
        </Container>
    )
}