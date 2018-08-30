import React, { Component } from 'react'
import {Layout, Col} from 'antd'

import SearchURL from '../API/SearchMenuURL'
import CardMenu from '../Component/CardMenu'

const {Footer, Content} = Layout

class Chicken extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: []
    }
  }

  componentDidMount() {
    fetch(SearchURL)
    .then(data => {
      return data.json()
    })
    .then(res => {
      let data = res.recipes.map((n, i)=> {
        return (
              <CardMenu
              cover={<img src={n.image_url} alt=""/>}
              title={n.title}
              recipeLink={n.f2f_url}
              />
        )
      })
      this.setState({
        recipe: data
      })
    })
  }

  render() {
    return (
      <div>
      <h1>Hello</h1>  
      <Layout>
        <Content>
          <div>{this.state.recipe}</div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      </div>
    );
  }
}

export default Chicken;