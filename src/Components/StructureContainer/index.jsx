import styled from "styled-components";

const WrapperPageMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2em 0;
  ${({ $position }) =>
    $position &&
    `
  position: ${$position};z-index: 9999; top: 0; right: 0; background-color: #041833; `}
  ${({ $marginHeader }) => $marginHeader && `margin-top: ${$marginHeader}; `}
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ContainerPageContent = styled.section`
  display: flex;
  justify-content: ${({ $justify }) => $justify || "center"};
  align-items: center;
  width: 100%;
  max-width: min(90%, 100em);
  height: 100%;
  gap: 1em;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    ${({ $isMenuActive }) =>
      $isMenuActive
        ? "justify-content: space-between"
        : "justify-content: flex-end "};
  }

  .boxBurguerMenu {
    width: auto;
    height: auto;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      display: flex;
    }
  }
  > .boxBurguerMenu svg {
    width: 100%;
    height: 100%;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 800px) {
      display: flex;
    }
  }
`;

const StructureContainer = ({
  children,
  justify,
  isMenuActive,
  position,
  marginHeader,
}) => {
  return (
    <WrapperPageMain $marginHeader={marginHeader} $position={position}>
      <ContainerPageContent $isMenuActive={isMenuActive} $justify={justify}>
        {children}
      </ContainerPageContent>
    </WrapperPageMain>
  );
};

export default StructureContainer;
