import { ADD_USER } from "../actions/actions";

import img1 from '../assets/images/ava1.jpg';
import img2 from '../assets/images/ava2.jpg';
import img3 from '../assets/images/ava3.jpg';
import img4 from '../assets/images/ava4.jpg';

const initialState = {
  list: [
    {
      id: 1,
      name: 'user1',
      age: 23,
      picture: img1,
    },
    {
      id: 2,
      name: 'user2',
      age: 18,
      picture: img2,
    },
    {
      id: 3,
      name: 'user3',
      age: 33,
      picture: img3,
    },
    {
      id: 4,
      name: 'user4',
      age: 51,
      picture: img4,
    },
    {
      id: 5,
      name: 'user5',
      age: 23,
      picture: img1,
    },
    {
      id: 6,
      name: 'user6',
      age: 18,
      picture: img2,
    },
    {
      id: 7,
      name: 'user7',
      age: 33,
      picture: img3,
    },
    {
      id: 4,
      name: 'user4',
      age: 51,
      picture: img4,
    },

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
