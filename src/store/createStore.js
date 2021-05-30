import { applyMiddleware, compose, createStore } from 'redux';

export default (reduces, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reduces, enhancer);
};
