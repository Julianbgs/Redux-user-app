export const ADD_USER = 'ADD_USER';

export function addUser(name, age, id) {
  return {
    type: ADD_USER,
    payload: {
      name,
      age,
      id
    }
  }
}

