export const ADD_USER = 'ADD_USER';

export function addUser(name, age) {
  return {
    type: ADD_USER,
    payload: {
      name,
      age
    }
  }
}

