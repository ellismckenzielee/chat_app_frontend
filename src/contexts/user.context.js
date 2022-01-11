import react, { useState } from "react";
const UserContext = react.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "ellislee", name: "ellis" });
  const isLoggedIn = (user) => {
    return user.username !== undefined;
  };
  const logout = () => {
    setUser({});
    return "Logged out.";
  };
  return <UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}> {children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
