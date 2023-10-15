import { combineReducers } from "redux";
import users from "./users"
const appReducer = combineReducers({
  users,
});

const rootReducer = (state, action) => {
  if (action.type === "RESSET_STORE") {
    state = {};
    sessionStorage.removeItem("token");
    localStorage.clear();
  }
  return appReducer(state, action);
};
export default rootReducer;
