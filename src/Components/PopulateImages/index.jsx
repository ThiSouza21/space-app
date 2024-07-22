import styled from "styled-components";
import { useImages } from "../ImagesPage";
import CardsImages from "../CardsImages";

const ContainerPopulate = styled.div`
  width: auto;
  height: auto;
  display: grid;
  justify-content: space-between;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, min(100%, 38em));
`;

const PopulateImages = () => {
  const { imagesSpace } = useImages();
  let initalValue = Math.floor(Math.random(1) * imagesSpace.length);
  let lastValue =
    Math.floor(Math.random(1) * (imagesSpace.length - initalValue)) +
    initalValue +
    1;
  const imagesPopulate = imagesSpace.slice(initalValue, lastValue);

  return (
    <ContainerPopulate>
      {imagesPopulate.map((card) => {
        const { id, titulo, fonte, path } = card;

        return (
          <CardsImages key={id} textFont={fonte} imgSpace={path}>
            {titulo}
          </CardsImages>
        );
      })}
    </ContainerPopulate>
  );
};

export default PopulateImages;
