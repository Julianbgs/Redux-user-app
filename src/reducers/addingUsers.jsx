import { ADD_USER } from "../actions/actions";

export function handleAddUser (state = {}, action) {
    switch (action.type) {
      case ADD_USER:
        return [...state, action.payload]
      default:
        return state
    }
}
