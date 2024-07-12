import styled from "styled-components";
import NavLinks from "../NavLinks";

const WrapperMenuMain = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 40%;
  height: 100svh;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 800px) {
    position: fixed;
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    box-shadow: 15px 0px 20px -5px rgba(64, 116, 179, 0.6);
    z-index: 999;
  }
`;

const ContainerMenuContent = styled.aside`
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  gap: 2em;
`;

const ImageMenu = styled.img`
  width: clamp(1em, 28svw, 15em);
`;

const ContainerNavBar = styled.nav`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  height: 100%;
  width: 100%;
  > ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: 0;
    padding: 0 0.5em;
  }

  > ul li {
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-size: clamp(0.6em, 4svw, 1.4em);
    word-break: break-word;
  }
`;

const NavBarMenu = () => {
  return (
    <WrapperMenuMain>
      <ContainerMenuContent>
        <ImageMenu src="/images/icones/logo.png" alt="Logo SpaceApp" />
        <ContainerNavBar>
          <ul>
            <li>
              <NavLinks
                imageActive={"/images/icones/home-ativo.png"}
                imageNoActive={"/images/icones/home-inativo.png"}
              >
                Início
              </NavLinks>
            </li>
            <li>
              <NavLinks
                imageActive={"/images/icones/mais-vistas-ativo.png"}
                imageNoActive={"/images/icones/mais-vistas-inativo.png"}
                to={"most-view"}
              >
                Mais Vistos
              </NavLinks>
            </li>
          </ul>
        </ContainerNavBar>
      </ContainerMenuContent>
    </WrapperMenuMain>
  );
};

export default NavBarMenu;
