import { Container } from './styles';

export function Menu() {
    return (
        <Container>
            <ul>
                <li>Home</li>
                <li>Personagens</li>
                <li>Naves</li>
                <li>Planetas</li>
                <li>Filmes</li>
            </ul>

            <ul>
                <li>Criar Conta</li>
                <li>Login</li>
            </ul>
        </Container>
    )
}