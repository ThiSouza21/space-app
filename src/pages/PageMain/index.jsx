import ContainerMain from "../../Components/ContainerMain";
import NavBarMenu from "../../Components/NavBarMenu";
import Header from "../../Components/Header";
import StyleGlobal from "../../Components/StyleGlobal";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const WrapperContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - clamp(15%, 17em, 40%));
  height: 100%;
  min-height: 100svh;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PageMain = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);

  const toggleMenuActive = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <ContainerMain>
      <StyleGlobal />
      <NavBarMenu isMenuActive={isMenuActive} toggleMenu={toggleMenuActive} />
      <WrapperContentPage>
        <Header isMenuActive={isMenuActive} toggleMenu={toggleMenuActive} />
        <Outlet />
      </WrapperContentPage>
    </ContainerMain>
  );
};

export default PageMain;
