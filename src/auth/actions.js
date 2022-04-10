import * as types from "./types";
export const setUser = (username, password) => async (dispatch) => {
  setTimeout(() => {
    try {
      if (username === "frontend@isawesome.com" && password === "cool") {
        dispatch({ type: types.GET_USER_ERROR, payload: null });
        dispatch({ type: types.TO_LOCAL, payload: { username, password } });
      } else {
        dispatch({ type: types.GET_USER_ERROR, payload: "Bad Credentials" });
      }
    } catch (error) {
      dispatch({ type: types.GET_USER_ERROR, payload: "unexpected error" });
    }
  }, 300);
};
export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
