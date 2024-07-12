import ContainerMain from "../../Components/ContainerMain";
import NavBarMenu from "../../Components/NavBarMenu";
import Header from "../../Components/Header";
import StyleGlobal from "../../Components/StyleGlobal";
import { Outlet } from "react-router-dom";

const PageMain = () => {
  return (
    <ContainerMain>
      <StyleGlobal />
      <NavBarMenu />
      <Header />
      <Outlet />
    </ContainerMain>
  );
};

export default PageMain;
