import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'redux'

import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provideer store={store}>
    <App />
  </Provideer>,
  document.getElementById('root')
);

serviceWorker.unregister();
