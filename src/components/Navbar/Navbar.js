import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'semantic-ui-react'

export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: {}
    }
  }
  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
  }
  render() {
    const { handleVisible } = this.props
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item>
          <Icon name='bars' onClick={handleVisible}/>
        </Menu.Item>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default Navbar


Navbar.propTypes = {
  handleVisible: PropTypes.func.isRequired
}