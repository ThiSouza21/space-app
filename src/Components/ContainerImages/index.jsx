import styled from "styled-components";
import NavigateImages from "../NavigateImages";
import PopulateImages from "../PopulateImages";
import StructureContainer from "../StructureContainer";

const ContainerGalleryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: auto;
  flex-grow: 1;
`;

const ContainerGalleryGridPopulate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: auto;

  > h3 {
    width: fit-content;
  }

  @media screen and (max-width: 1000px) {
    flex-grow: 1;
  }
`;

const ContainerImages = () => {
  return (
    <StructureContainer alignContent={"flex-start"} noWrap={"wrap"}>
      <ContainerGalleryGrid>
        <h3>Navegue pela Galeria</h3>
        <NavigateImages />
      </ContainerGalleryGrid>
      <ContainerGalleryGridPopulate>
        <h3>Populares</h3>
        <PopulateImages />
      </ContainerGalleryGridPopulate>
    </StructureContainer>
  );
};
export default ContainerImages;
