import styled from "styled-components";
import CardsImages from "../CardsImages";
import { useImages } from "../ImagesPage";

const ContainerCardsImagesContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: space-between;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, min(46%, 28em));
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
        >
          {image.titulo}
        </CardsImages>
      ))}
    </ContainerCardsImagesContent>
  );
};
export default NavigateImages;
