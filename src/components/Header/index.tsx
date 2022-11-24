import { Container } from './styles';
import { Menu } from '../Menu';

import starWarsLogo from '../../assets/starwars-logo.svg';

export function Header() {
    return (
        <Container>
            <img src={starWarsLogo} alt="Star Wars Logo" />
            <Menu />
        </Container>
    )
}