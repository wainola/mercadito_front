import {
  LOGIN,
  OK_LOGIN,
  FAIL_LOGIN,
  REFRESH_LOGIN,
  LOGOUT,
  OK_LOGOUT
} from './types'

import Api from '../api/api'

export const doLogin = () => ({
  type: LOGIN
})

export const okLogin = payload => ({
  type: OK_LOGIN,
  payload
})

export const failLogin = payload => ({
  type: FAIL_LOGIN,
  payload
})

export const refreshSession = payload => ({
  type: REFRESH_LOGIN,
  payload
})

export const login = body => dispatch => {
  dispatch(doLogin())

  return Api.login(body)
  .then(res => dispatch(okLogin(res)))
  .catch(res => {
    dispatch(failLogin(res))
  })
}

export const logout = dispatch => ({
  type: LOGOUT
})