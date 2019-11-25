import React from "react";
import useAuthHandler from "../hooks/useAuthHandler";

const AuthContext = React.createContext({});

const AuthProvider = props => {
  const { authState, setLoggedInState } = useAuthHandler({ isLoggedIn : false });
console.log(setLoggedInState);
  return (
    <AuthContext.Provider value={{authState, setLoggedInState}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
