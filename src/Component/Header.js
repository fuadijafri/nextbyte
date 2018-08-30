import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Menu} from 'antd'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posisi: 'route1',
    }
  }

  render() {
    return (
      <Menu
        selectedKeys={[this.state.posisi]}
        mode="horizontal"
      >
        <Menu.Item key="route1">
          <Link to ='/all-in-food'>All in Food</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header