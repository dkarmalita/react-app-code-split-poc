import { Scene } from './Scene'

import { APPID, reducer } from './reducer.duck'
import { epics } from './epics'

export const routes = [
  { title: 'Ping-Pong', path: '/ping', component: Scene }
]

export const duck = { reducer, epics, APPID }