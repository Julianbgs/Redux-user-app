import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { handleAddUser } from "./reducers/addingUsers";
import App from './App';

const data = [
  { name: 'Julian',
    age: 23,
    id: 1
  },
  {
    name: 'Olga',
    age: 19,
    id: 2
  }
];

const store = createStore(handleAddUser, data);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
