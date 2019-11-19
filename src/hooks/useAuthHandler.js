import { useState } from "react";

const useAuthHandler = (initialState = {}) => {
  const defaultState = {
    isLoggedIn: false
  };

  const [authState, setAuthState] = useState(
    Object.assign(initialState, defaultState)
  );

  const setLoggedInState = () => {
    setAuthState({
      isLoggedIn: true
    });
  };

  return {
    authState,
    setLoggedInState
  };
};

export default useAuthHandler;
