import { createContext } from "react";
import React, { useState } from "react";

const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [translated, setTranslated] = useState(false);

  const handleTranslate = () => {
    setTranslated(true);
  };

  const handleOriginal = () => {
    setTranslated(false);
  };

  const data = {
      translated,
      handleTranslate,
      handleOriginal
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { AuthProvider };
export default UserContext;
