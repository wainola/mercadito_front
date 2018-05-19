import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import GuestRoute from './GuestRoute/GuestRoute'
import AuthRoute from './AuthRoute/AuthRoute'
import Login from '../containers/Login/Login'
import Home from '../containers/Home/Home'
import Dashboard from '../containers/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'


const routes = ({location, match}) => {
  const { path } = match
  return (
    <div>
      <Navbar />
      <Route location={location} exact path='/' component={Home} />
      <GuestRoute location={location} exact path='/login' component={Login} />
      <AuthRoute location={location} exact path='/dashboard' component={Dashboard} />
    </div>
  )
}

routes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default routes
