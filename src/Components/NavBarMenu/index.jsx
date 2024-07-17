import styled from "styled-components";
import NavLinks from "../NavLinks";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const WrapperMenuMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: clamp(15%, 17em, 40%);
  max-width: 40%;
  height: inherit;
  transition: all 0.2s ease-in-out;
  background: #041833;
  z-index: 6000;
  position: fixed;

  @media screen and (max-width: 800px) {
    top: 0;
    left: 0;
    width: clamp(15%, 17em, 40%);
    height: 100svh;
    box-shadow: 15px 0px 20px -5px rgba(64, 116, 179, 0.6);
    ${({ $isMenuActive }) =>
      $isMenuActive ? "transform: translateX(calc(-100% - 20px));" : ""}
  }
`;

const ContainerMenuContent = styled.aside`
  background: #041833;
  padding: clamp(0.2em, 0.8em, 1em);
  width: clamp(15%, 17em, 40%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  gap: clamp(1.4em, 4svw, 4em);
  left: 0;
  transition: all 0.4s ease-in-out;
  position: fixed;

  @media screen and (max-width: 800px) {
    ${({ $isMenuActive }) => $isMenuActive && "transform: translateX(-100%)"};
  }
`;

const ImageMenu = styled.img`
  width: clamp(1em, 28svw, 15em);
`;

const ContainerNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 400px) {
    align-items: center;
  }

  > ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: min(2em, 4em);

    margin: 0;
    padding: 0 0.5em;
  }

  > ul li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6em;
    font-size: clamp(0.6em, 4svw, 1.4em);
    word-break: break-all;

    @media screen and (max-width: 300px) {
      justify-content: center;
    }
  }

  > ul li a {
    word-break: break-word;
    @media screen and (max-width: 300px) {
      display: none;
    }
  }
`;

const ArrowMenuToggle = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 94%;
  right: 0%;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

const NavBarMenu = ({ isMenuActive, toggleMenu }) => {
  return (
    <WrapperMenuMain $isMenuActive={isMenuActive}>
      <ContainerMenuContent $isMenuActive={isMenuActive}>
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
        <ArrowMenuToggle onClick={toggleMenu} size={42} fill="#d9d9d9" />
      </ContainerMenuContent>
    </WrapperMenuMain>
  );
};

export default NavBarMenu;
