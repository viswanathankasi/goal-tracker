import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router'

// DEV NOTE: only required until Material UI 0.16+, as it won't use
// `onTouchTap` unduly anymore.
injectTapEventPlugin()

import App from './components/app'
import HistoryScreen from './containers/history-screen'
import HomeScreen from './containers/home-screen'
import SettingsScreen from './containers/settings-screen'
import store, { loggedIn } from './store'

function requireAuth (nextState, replace) {
  if (!loggedIn()) {
    replace('/')
  }
}

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <HomeScreen />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
