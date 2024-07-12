import styled from "styled-components";

const BackgroundGradient = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100svh;
  width: 100%;
`;

const ContainerMain = ({ children }) => {
  return (
    <BackgroundGradient className="containerMain">
      {children}
    </BackgroundGradient>
  );
};

export default ContainerMain;
