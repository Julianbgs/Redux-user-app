export const ADD_USER = 'ADD_USER';
export const CHANGE_USER = 'CHANGE_USER';

export function addUser(name, age, picture) {
  return {
    type: ADD_USER,
    payload: {
      name,
      age,
      picture,
    }
  }
}
export function changeUser( id,name, age, picture) {
  return {
    type: CHANGE_USER,
    payload: {
      id,
      name,
      // age,
      // picture
    }
  }
}

