export const ADD_USER = 'ADD_USER';
export const ADD_IMAGE = 'ADD_IMAGE';

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

