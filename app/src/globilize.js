import { fetchJsFromCDN, globilize } from 'utils'

globilize({
  "react": require("react"),
  "react-dom": require("react-dom"),
  "react-redux": require("react-redux"),
  "react-router-dom": require("react-router-dom"),
  "redux": require("redux"),
  "redux-observable": require("redux-observable"),
  "rxjs": require("rxjs"),
  "rxjs-compat": require("rxjs-compat"),
})

