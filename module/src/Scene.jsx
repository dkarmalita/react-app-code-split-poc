import React from 'react';
import { connect } from 'react-redux'
import { APPID, actions } from './reducer.duck'

const extractAppState = (state) => state[APPID] ? state[APPID] : {}//state[0][APPID] //

const App = (props) => {
  const { isPinging, ping } = props
  return (
    <div>
      <h1>is pinging: { `${isPinging}` }</h1>
      <button
        onClick={ping}
      >Start PING</button>
    </div>
  );
}

const mapStateToProps = (state) => extractAppState( state )

const AppConnected = connect(
  ( state ) => extractAppState( state ), // map state to props * -> *
  { ping: actions.ping }
)(App);

export const Scene = <AppConnected/>
