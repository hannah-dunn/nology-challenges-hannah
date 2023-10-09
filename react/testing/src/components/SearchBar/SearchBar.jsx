import React from "react";

const SearchBar = ({ formSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        value={inputValue}
        type="text"
        placeholder="search"
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
