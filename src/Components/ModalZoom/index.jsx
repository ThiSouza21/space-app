import styled from "styled-components";
import CardsImages from "../CardsImages";
import { useModal } from "../ModalActive";

const ContainerDialogModal = styled.dialog`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: 10000;
  box-shadow: 0px 0px 40px -3px rgba(64, 116, 179, 0.9);
`;

const ModalZoom = ({ effectZoom }) => {
  const { isModalActive } = useModal();
  const { titulo, fonte, path } = isModalActive;

  return (
    <ContainerDialogModal $effectZoom={effectZoom}>
      <CardsImages textFont={fonte} imgSpace={path}>
        {titulo}
      </CardsImages>
    </ContainerDialogModal>
  );
};

export default ModalZoom;
