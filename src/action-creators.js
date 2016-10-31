import fetch from 'isomorphic-fetch'

// Goal settings management

export const ADD_GOAL = '@@GOALTRACKER/GOALS_ADD'
export const REMOVE_GOAL = '@@GOALTRACKER/GOALS_DEL'
export const UPDATE_GOAL = '@@GOALTRACKER/GOALS_UPDATE'

export function addGoal (name, target, units) {
  return { type: ADD_GOAL, name, target, units }
}

export function removeGoal (id) {
  return { type: REMOVE_GOAL, id }
}

export function updateGoal (id, name, target, units) {
  return { type: UPDATE_GOAL, id, name, target, units }
}

// Using the app everyday

export const CLEAR_HISTORY = '@@GOALTRACKER/HISTORY_CLEAR'
export const CLOSE_DAY = '@@GOALTRACKER/CLOSE_DAY'
export const LOGIN_FAILURE = '@@GOALTRACKER/AUTH_LOGIN_FAILURE'
export const LOGIN_START = '@@GOALTRACKER/AUTH_LOGIN_START'
export const LOGIN_SUCCESS = '@@GOALTRACKER/AUTH_LOGIN_SUCCESS'
export const LOGOUT = '@@GOALTRACKER/AUTH_LOGOUT'
export const PROGRESS = '@@GOALTRACKER/PROGRESS'

export function clearHistory () {
  return { type: CLEAR_HISTORY }
}

export function closeDay () {
  return { type: CLOSE_DAY }
}

export function logIn (email, password) {
  return (dispatch) => {
    dispatch(logInStart())

    return fetch('http://localhost:3001/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((res) => res.json())
    .then(({ status }) => {
      if (status === 'authenticated') {
        dispatch(logInSuccess(email))
      } else {
        dispatch(logInFailure())
      }
    })
    .catch((err) => {
      dispatch(logInFailure())
      console.error(err)
    })
  }
}

function logInFailure () {
  return { type: LOGIN_FAILURE }
}

function logInStart () {
  return { type: LOGIN_START }
}

function logInSuccess (email) {
  return { type: LOGIN_SUCCESS, email }
}

export function logOut () {
  return { type: LOGOUT }
}

export function progressOnGoal (goalId, increment = 1) {
  return { type: PROGRESS, goalId, increment }
}
