import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const appContext = createContext();
const cookies = new Cookies();

export const StoreProvider = ({ children }) => {
  // context declarations
  var userSession, __sessionUser;
  var userAuth, __sessionAuth;
  var userAuthRef, __sessionAuthRef;
  var theme, __session_theme;

  if (typeof window !== "undefined") {
    __sessionAuth =
      sessionStorage.getItem("JN_C_ACC") ?? cookies.get("JN_C_ACC");
    __sessionAuthRef =
      sessionStorage.getItem("JN_C_REF") ?? cookies.get("JN_C_REF");
    __sessionUser =
      JSON.parse(sessionStorage.getItem("JN_C_USR")) ?? cookies.get("JN_C_USR");
    __session_theme =
      localStorage.getItem("JN_THEME") ?? cookies.get("JN_THEME");

    //set initial value of session auth
    __sessionAuth != undefined || __sessionAuth != "undefined"
      ? (userAuth = __sessionAuth)
      : (userAuth = undefined);

    //set initial value of session auth ref
    __sessionAuthRef != undefined || __sessionAuthRef != "undefined"
      ? (userAuthRef = __sessionAuthRef)
      : (userAuthRef = undefined);

    //set initial value of user in session data
    __sessionUser != undefined || __sessionUser != "undefined"
      ? (userSession = __sessionUser)
      : (userSession = null);

    //set initial site theme
    __session_theme == undefined || __session_theme == "undefined"
      ? (theme = "light")
      : (theme = __session_theme);
  } else {
    userAuth = "";
    userAuthRef = "";
    userSession = null;
    theme = "light";
  }
  const [session, setSession] = useState(userSession);
  const [sessionAuth, setSessionAuth] = useState(userAuth);
  const [sessionAuthRef, setSessionAuthRef] = useState(userAuthRef);
  const [siteTheme, setSiteTheme] = useState(theme);
  return (
    <appContext.Provider
      value={{
        session,
        setSession,

        sessionAuth,
        setSessionAuth,

        sessionAuthRef,
        setSessionAuthRef,

        siteTheme,
        setSiteTheme,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const ContextStore = () => useContext(appContext);
