import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import history from './services/history';
import Routes from './routes';
import { persistor, store } from './store';
import GlobalStyles from './styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
