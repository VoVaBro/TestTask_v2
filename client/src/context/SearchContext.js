import React, { createContext, useState } from "react";

const context = createContext(null);

const SearchProvider = ({ children }) => {

    const [searchValue, setSearchValue] = useState();
    
  return (
      <context.Provider value={[searchValue, setSearchValue]}>
          {children}
      </context.Provider>
  );
};

SearchProvider.context = context;

export default SearchProvider;