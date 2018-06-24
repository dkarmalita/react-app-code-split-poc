import { combineEpics } from 'redux-observable';
// import 'rxjs'

import { Observable } from 'rxjs/Rx';
import { from } from 'rxjs'; // for rxjs v.6+
import { actionTypes } from './reducer.duck';
import { api } from './api' // just for example of api mounting

export const pingEpic = (action$, store, { api }) =>
  action$.ofType(actionTypes.PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .map(() => { return { type: actionTypes.PONG } })

export const epics = (...args) => combineEpics(pingEpic)(...args, { api })

