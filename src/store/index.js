import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlewate = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddlewate];
const store = createStore(rootReducer, middlewares);

sagaMiddlewate.run(rootSaga);

export default store;
