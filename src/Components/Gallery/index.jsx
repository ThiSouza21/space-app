import styled from "styled-components";
import ContainerImages from "../ContainerImages";
import HeroImage from "../HeroImage";
import { useModal } from "../ModalActive";
import ModalZoom from "../ModalZoom";
import Tags from "../Tags";

const OverlayModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  inset: 0;
  z-index: 8000;
`;

const Gallery = () => {
  const { isModalActive } = useModal();
  return (
    <>
      <HeroImage />
      <Tags />
      <ContainerImages />
      {isModalActive && <ModalZoom effectZoom={true} />}
      {isModalActive && <OverlayModal />}
    </>
  );
};
export default Gallery;
