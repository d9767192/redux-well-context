import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux-well-context';
import Layouts from './layouts';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Layouts />
  </Provider>
);

render(<App />, document.getElementById('root'));
