import React, { createContext, useState } from "react";

const context = createContext(null);

const PocemonProvider = ({ children }) => {

    const [numCards, setNumCards] = useState(10);
    
  return (
      <context.Provider value={[numCards, setNumCards]}>
          {children}
      </context.Provider>
  );
};

PocemonProvider.context = context;

export default PocemonProvider;