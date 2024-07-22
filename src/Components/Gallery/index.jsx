import styled from "styled-components";
import ContainerImages from "../ContainerImages";
import HeroImage from "../HeroImage";
import { useModal } from "../ModalActive";
import ModalZoom from "../ModalZoom";
import Tags from "../Tags";
import { useState, useEffect } from "react";

const OverlayModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  inset: 0;
  z-index: 8000;
`;

const Gallery = () => {
  const { isModalActive } = useModal();
  const [tagImages, setTagImages] = useState(0);

  const handleSetTagImage = (tagId) => {
    setTagImages(tagId);
  };

  useEffect(() => {}, [tagImages]);

  return (
    <>
      <HeroImage />
      <Tags tagImages={tagImages} handleSetTagImage={handleSetTagImage} />
      <ContainerImages tagImages={tagImages} />
      {isModalActive && (
        <ModalZoom effectZoom={true} modalExist={isModalActive} />
      )}
      {isModalActive && <OverlayModal />}
    </>
  );
};
export default Gallery;
