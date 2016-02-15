// Goal settings management

export const ADD_GOAL = '@@GOALTRACKER/GOALS_ADD'
export const REMOVE_GOAL = '@@GOALTRACKER/GOALS_DEL'
export const UPDATE_GOAL = '@@GOALTRACKER/GOALS_UPDATE'

export function addGoal (name, target, units) {
  // Votre code ici
}

export function removeGoal (id) {
  // Votre code ici
}

export function updateGoal (id, name, target, units) {
  // Votre code ici
}

// Using the app everyday

export const LOGIN = '@@GOALTRACKER/AUTH_LOGIN'
export const LOGOUT = '@@GOALTRACKER/AUTH_LOGOUT'

export function logIn (email, password) {
  return { type: LOGIN, email, password }
}

export function logOut () {
  return { type: LOGOUT }
}
