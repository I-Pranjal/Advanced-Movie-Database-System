import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName, userMail, setUserMail }}>
      {children}
    </UserContext.Provider>
  );
};


