import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: ${({ $isActive }) => ($isActive ? "#c98cf1" : "#d9d9d9")};
  text-decoration: none;
`;

const LabelNavLink = styled.label`
  display: flex;
  width: auto;
  height: auto;
  &:hover {
    cursor: pointer;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;

const NavLinks = ({ children, to = "", imageActive, imageNoActive }) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  const urlInfo = useLocation();
  const textLinkName = children.trim().split(" ").join("");

  const handleUrlLink = () => {
    urlInfo.pathname === `/${to}`
      ? setIsLinkActive(true)
      : setIsLinkActive(false);
  };

  useEffect(() => {
    handleUrlLink();
  });

  return (
    <>
      <LabelNavLink htmlFor={`link${textLinkName}`}>
        <img
          src={isLinkActive ? imageActive : imageNoActive}
          alt={`Icon ${children}`}
        />
      </LabelNavLink>
      <StyledNavLink
        id={`link${textLinkName}`}
        $isActive={isLinkActive}
        to={`/${to}`}
      >
        {children}
      </StyledNavLink>
    </>
  );
};

export default NavLinks;
