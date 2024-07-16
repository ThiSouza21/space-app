import styled from "styled-components";
import StructureContainer from "../StructureContainer";

const ImageHeroSpace = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

const ContainerHeroSpaceContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`;

const TitleHeroSpace = styled.h3`
  margin: 0;
  font-size: clamp(0.2em, 2svw, 2em);
  position: absolute;
  top: 25%;
  left: 1em;
  color: #d9d9d9;
  width: min(100%, 10em);
  height: auto;
  word-break: break-word;
  font-weight: normal;
`;

const HeroImage = () => {
  return (
    <StructureContainer marginHeader={"7.3125em"}>
      <ContainerHeroSpaceContent>
        <ImageHeroSpace src="/images/banner.png" alt="Image Hero" />
        <TitleHeroSpace>
          A galeria mais completa de fotos do espaço!
        </TitleHeroSpace>
      </ContainerHeroSpaceContent>
    </StructureContainer>
  );
};

export default HeroImage;
