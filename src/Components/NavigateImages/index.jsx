import styled from "styled-components";
import CardsImages from "../CardsImages";
import { useImages } from "../ImagesPage";

const ContainerCardsImagesContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: space-between;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, min(75%, 34em));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, min(100%, 38em));
  }
`;

const NavigateImages = () => {
  const { imagesSpace } = useImages();

  return (
    <ContainerCardsImagesContent>
      {imagesSpace.map((image) => (
        <CardsImages
          key={image.id}
          textFont={image.fonte}
          imgSpace={image.path}
          modalExist={image.id}
        >
          {image.titulo}
        </CardsImages>
      ))}
    </ContainerCardsImagesContent>
  );
};
export default NavigateImages;
