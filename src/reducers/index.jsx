import { combineReducers } from "redux";
import { reducer as reducerUser } from "./users";

export default combineReducers({
  users: reducerUser,
});
