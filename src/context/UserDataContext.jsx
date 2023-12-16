import { useState, createContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const lsUserData = localStorage.getItem("userData");
  const [userData, setUserData] = useState(JSON.parse(lsUserData));
  const lsToken = localStorage.getItem("token");
  const [token, setToken] = useState(lsToken);

  return (
    <UserDataContext.Provider value={{ userData, setUserData, setToken, token }}>
      {children}
    </UserDataContext.Provider>
  )
}