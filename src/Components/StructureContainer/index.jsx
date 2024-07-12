import styled from "styled-components";

const WrapperPageMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2em 0;
`;

const ContainerPageContent = styled.section`
  display: flex;
  justify-content: ${({ $justify }) => $justify || "center"};
  width: 100%;
  max-width: min(80%, 98em);
  height: 100%;
`;

const StructureContainer = ({ children, justify }) => {
  return (
    <WrapperPageMain>
      <ContainerPageContent $justify={justify}>{children}</ContainerPageContent>
    </WrapperPageMain>
  );
};

export default StructureContainer;
