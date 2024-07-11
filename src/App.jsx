import styled from "styled-components";
import StyleGlobal from "./Components/StyleGlobal";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100svh;
  width: 100%;
`;

function App() {
  return (
    <BackgroundGradient>
      <StyleGlobal />
    </BackgroundGradient>
  );
}

export default App;
