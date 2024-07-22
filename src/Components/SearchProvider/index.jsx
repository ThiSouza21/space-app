import { createContext, useState } from "react";
import photos from "../../json/fotos.json";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [filterImages, setFilterImages] = useState(photos);

  const handleSearchImages = (e) => {
    e.preventDefault();

    setValueSearch(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        valueSearch,
        setValueSearch,
        handleSearchImages,
        filterImages,
        setFilterImages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
