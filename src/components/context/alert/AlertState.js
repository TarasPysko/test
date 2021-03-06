import { AlertContext } from "./alertContext";
import React, { useReducer } from "react";
import { alertReduser } from "./alertReduser";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReduser, null);
  const hide = () => dispatch({ type: HIDE_ALERT });
  const show = (text, type = "secondary") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { type, text },
    });
  };
  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
