import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import './config/reactotronConfig';
import GlobalStyles from './styles/global';

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyles />
  </Router>
);

export default App;
