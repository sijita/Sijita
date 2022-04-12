import { createContext } from "react";
import React, { useState } from "react";

const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [translated, setTranslated] = useState(false);

  const handleTranslate = () => {
    setTranslated(!translated);
  };

  const data = {
      translated,
      handleTranslate
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { AuthProvider };
export default UserContext;
