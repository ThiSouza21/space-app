import { createContext, useState } from "react";
import { useImages } from "../ImagesPage";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(null);
  const { imagesSpace } = useImages();
  const toggleModalActive = () => {
    setIsModalActive(null);
  };
  const handleModalActive = (cardId) => {
    setIsModalActive(imagesSpace[cardId - 1]);
  };

  return (
    <ModalContext.Provider
      value={{
        handleModalActive,
        toggleModalActive,
        isModalActive,
        setIsModalActive,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
