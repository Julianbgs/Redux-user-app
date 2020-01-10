import { ADD_USER } from "../actions/actions";

import img1 from '../assets/images/ava1.jpg';
import img2 from '../assets/images/ava2.jpg';

const initialState = {
  list: [
    {
      id: 1,
      name: 'user1',
      picture: img1,
    },
    {
      id: 2,
      name: 'user2',
      picture: img2,
    }
  ]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.payload,
            id: state.list.reduce((acc, curr) => Math.max(acc, curr.id), 0) + 1
          }
        ]
      };
    default:
      return state
  }
}
