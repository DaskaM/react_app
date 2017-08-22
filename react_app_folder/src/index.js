import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import actions from 'reducers/actions'
import { render } from 'react-dom'
import { createStore } from 'redux'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let store = createStore(actions)
render(
    <Root store={store} />,
    document.getElementById('root')
)