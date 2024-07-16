import { useContext } from "react";
import { ImagesContext } from "../ImagesProvider";

export const useImages = () => useContext(ImagesContext);
