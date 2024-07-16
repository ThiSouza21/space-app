import { createContext, useState } from "react";
import photos from "../../json/fotos.json";

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [imagesSpace, setImagesSpace] = useState(photos);

  return (
    <ImagesContext.Provider value={{ imagesSpace, setImagesSpace }}>
      {children}
    </ImagesContext.Provider>
  );
};
