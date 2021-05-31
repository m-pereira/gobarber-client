import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import history from './services/history';
import Routes from './routes';
import { persistor, store } from './store';
import GlobalStyles from './styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
