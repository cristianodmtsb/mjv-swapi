import { Link } from "react-router-dom";
import rebelsLogo from "../../assets/rebels-logo-white.svg";
import { Main } from "./styles";

export const NotFound = () => {
    return(
        <Main>
            <img src={rebelsLogo} alt="Logo Rebeldes" />
            <h1>Página não encontrada</h1>
            <h2>404</h2>
            <Link to='/'>
                Ir para Home
            </Link>
        </Main>
    )
}