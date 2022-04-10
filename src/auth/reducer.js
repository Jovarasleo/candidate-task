import * as types from "./types";
const DEFAULT_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  error: null,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.TO_LOCAL: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.GET_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.LOGOUT: {
      localStorage.removeItem("user");
      return {
        ...state,
        user: "",
      };
    }
    default:
      return state;
  }
}
export default reducer;
