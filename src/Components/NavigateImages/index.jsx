import styled from "styled-components";
import CardsImages from "../CardsImages";
import { useImages } from "../ImagesPage";
import { useSearch } from "../SearchContext";

const ContainerCardsImagesContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: space-between;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, min(75%, 35em));
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, min(100%, 38em));
  }
`;

const NavigateImages = ({ tagImages }) => {
  const { imagesSpace } = useImages();
  const { valueSearch, filterImages } = useSearch();

  return (
    <ContainerCardsImagesContent>
      {valueSearch !== ""
        ? filterImages.map((image, i) => {
            return (
              <CardsImages
                key={image.id}
                textFont={image.fonte}
                imgSpace={image.path}
                modalExist={i + 1}
                favExist={true}
                i={i}
                pathFav={image.pathFav}
              >
                {image.titulo}
              </CardsImages>
            );
          })
        : tagImages === 0
        ? imagesSpace.map((image, i) => {
            return (
              <CardsImages
                key={image.id}
                textFont={image.fonte}
                imgSpace={image.path}
                modalExist={i + 1}
                favExist={true}
                i={i}
                pathFav={image.pathFav}
              >
                {image.titulo}
              </CardsImages>
            );
          })
        : imagesSpace.map((image, i) => {
            if (image.tagId === tagImages) {
              return (
                <CardsImages
                  key={image.id}
                  textFont={image.fonte}
                  imgSpace={image.path}
                  modalExist={i + 1}
                  favExist={true}
                  i={i}
                  pathFav={image.pathFav}
                >
                  {image.titulo}
                </CardsImages>
              );
            }
          })}
    </ContainerCardsImagesContent>
  );
};
export default NavigateImages;
