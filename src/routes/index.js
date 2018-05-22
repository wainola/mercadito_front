import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Sidebar, Menu, Segment, Icon, Container } from 'semantic-ui-react'

import GuestRoute from './GuestRoute/GuestRoute'
import AuthRoute from './AuthRoute/AuthRoute'
import Login from '../containers/Login/Login'
import Home from '../containers/Home/Home'
import Dashboard from '../containers/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'

class Routes extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }
  handleVisible = () => {
    this.setState({visible: !this.state.visible})
  }
  render(){
    const { visible } = this.state
    const { location } = this.props 
    return(
      <div style={{height: '100%' }}>
        <Sidebar.Pushable as={Segment} style={{ minHeight: 800, padding: '1em 0em' }}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item name='login'>
              <Icon name='camera'/>
              Login
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Navbar
              handleVisible={this.handleVisible}
            />
            <Route location={location} exact path='/' component={Home} />
            <GuestRoute location={location} exact path='/login' component={Login} />
            <AuthRoute location={location} exact path='/dashboard' component={Dashboard} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
    )
  }
}

Routes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Routes
