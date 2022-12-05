import * as S from "./styles";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youTube from "../../assets/youTube.svg";

function Footer() {
  return (
    <S.Container>
      <div>
        <p>Siga Star Wars</p>
        <S.Midias>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={youTube} alt="youTube" />
          </a>
        </S.Midias>
      </div>
    </S.Container>
  );
}

export default Footer;
