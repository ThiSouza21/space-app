import StructureContainer from "../../Components/StructureContainer";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { forwardRef, useEffect, useRef } from "react";

const SearchInput = styled.input`
  font-size: clamp(0.2em, 3svw, 1em);
  padding: 1em 4em 1em 1em;
  border-radius: 10px;
  width: 100%;
  background-color: transparent;
  color: #d9d9d9;
  border: 1px solid #c98cf1;
  outline: none;
`;

const ContainerSearch = styled.div`
  position: relative;
  display: flex;
  align-self: flex-end;
  width: auto;
  max-width: 100%;
  height: auto;
  :hover {
    cursor: text;
  }
`;

const LabelSvg = styled.label`
  width: clamp(0.2em, 5svw, 2.4em);
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  transform: translate(0%, -50%);
  top: 50%;
  right: 5%;

  > svg {
    fill: #c98cf1;
  }

  :hover {
    cursor: pointer;
  }
`;

const ImageBurguerMenu = forwardRef((props, ref) => (
  <div className="boxBurguerMenu" ref={ref}>
    <GiHamburgerMenu {...props} />
  </div>
));

ImageBurguerMenu.displayName = "ImageBurguerMenu";

const Header = ({ toggleMenu, isMenuActive }) => {
  const buttonToggle = useRef(null);

  useEffect(() => {
    if (buttonToggle.current) {
      buttonToggle.current.style.display = isMenuActive ? "flex" : "none";
    }
  }, [isMenuActive]);

  return (
    <StructureContainer
      position={"fixed"}
      isMenuActive={isMenuActive}
      justify={"flex-end"}
    >
      <ImageBurguerMenu
        size={32}
        fill="#d9d9d9"
        onClick={toggleMenu}
        ref={buttonToggle}
        className="icon-menu"
      />
      <ContainerSearch>
        <SearchInput
          id="serchHeader"
          type="text"
          placeholder="O que você procura?"
        />
        <LabelSvg htmlFor="serchHeader">
          <CiSearch size={26} />
        </LabelSvg>
      </ContainerSearch>
    </StructureContainer>
  );
};

export default Header;
