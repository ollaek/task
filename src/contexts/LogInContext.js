import React from "react";

const AuthContext = React.createContext({});

const AuthProvider = props => {
  const { authState, setLoggedInState } = useAuthHandler();

  return (
    <AuthContext.Provider value={(authState, setLoggedInState)}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
