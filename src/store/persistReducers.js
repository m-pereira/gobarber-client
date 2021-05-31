// Esse storage vai carregar a estratégia de storage padrao para o ambiente
// web => localstorage; reactNative => asyncStorage
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) =>
  persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'], // se nao tiver o reducer na whitelist, o redux-persist nao armazena
    },
    reducers
  );
