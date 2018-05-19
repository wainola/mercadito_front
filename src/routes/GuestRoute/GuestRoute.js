import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({isAuthenticated, component:Component, location, ...rest}) => {
  console.log('GuestRoute', isAuthenticated)
  return (
    <Route
    {...rest}
    render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to='/' />)}
    />
  )
}

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

function mapStateToProps({auth}){
  return {isAuthenticated: auth.isAuthenticated}
}

export default connect(mapStateToProps)(AuthRoute)
