import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: ${({ $isActive }) => ($isActive ? "#c98cf1" : "#d9d9d9")};
  text-decoration: none;
`;

const SpanNavLink = styled.span`
  display: flex;
  width: clamp(2em, 8svw, 2.2em);
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
  const historyLink = useNavigate();
  const urlInfo = useLocation();
  const textLinkName = children.trim().split(" ").join("");

  const handleUrlLink = () => {
    urlInfo.pathname === `/${to}`
      ? setIsLinkActive(true)
      : setIsLinkActive(false);
  };

  const handleLabelClick = () => {
    historyLink(`/${to}`);
  };

  useEffect(() => {
    handleUrlLink();
  });

  return (
    <>
      <SpanNavLink onClick={handleLabelClick}>
        <img
          src={isLinkActive ? imageActive : imageNoActive}
          alt={`Icon ${children}`}
        />
      </SpanNavLink>
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
