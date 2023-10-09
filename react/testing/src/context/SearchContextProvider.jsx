import { children, createContext } from "react";

export const SearchContext = createContext(null);

const SearchContextProvider = () => {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
