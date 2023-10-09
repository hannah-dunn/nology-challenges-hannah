import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchContextProvider from "./context/SearchContextProvider";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <SearchContextProvider>
        <Wrapper />
      </SearchContextProvider>
    </>
  );
}

export default App;
