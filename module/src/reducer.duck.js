/* constants.js
--------------- */
export const APPID = 'MYAPP'
// APP_ID is served as a redux perefix specific for this application/module.
// Tip: the name field of the package.json will be perfectly suit to this purpose.

/* actionTypes.js
----------------- */
// import { APPID } from './constants.js'

const createReduxId = (id) => `${APPID}/${id}`
// Little helper which converts any redux id string to the application specific one.

export const actionTypes = {
  PING: createReduxId('PING'),
  PONG: createReduxId('PONG'),
}

/* actions.js
------------- */
// import * as actionTypes from './actionTypes'

export const actions = {
  ping: () => ({ type: actionTypes.PING }),
  pong: () => ({ type: actionTypes.PONG }),
}

/* initialState.js
------------------ */
export const initialState = { isPinging: false }

/* reducer.js
------------- */
// import { initialState, createAppState } from './initialState'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PING:
      return {
        ...state,
        isPinging: true
      };

    case actionTypes.PONG:
      return {
        ...state,
        isPinging: false
      };

    default:
      return state;
  }
};

