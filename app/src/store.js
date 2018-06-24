/* store.configure.js
--------------------- */
import { createStore as _createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable'; // epics

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const epicMiddleware = createEpicMiddleware(); // epics

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
  epicMiddleware, // epics
  // ...[],
))(_createStore);

/* index.js
----------- */
// import configureStore from './store.configure';

export const createStore = (ducks) => {

  const rootReducer = combineReducers( ...ducks.map( ({APPID, reducer}) => { return { [APPID]: reducer }} ) )
  const rootEpic = combineEpics( ...ducks.map( duck => duck.epics ) )

  const store = createStoreWithMiddleware( rootReducer, {} );

  if(rootEpic) { epicMiddleware.run(rootEpic) };

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer);
    });
  }

  store.dispatch({ type: 'STORE_IS_READY' })

  return store
}

