import React, { Component } from 'react'
import { Row, Col } from 'antd'

import CardNews from '../Component/CardNews'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    fetch('http://food2fork.com/api/search?key=d4c868e1f2432ee2717b463c8cd3de35&q=shredded%20chicken')
    .then(data => {
      return data.json()
    })
    .then(res => {
      let data = res.recipes.map((d, i) => {
        return (
          <Col className="gutter-row" span={6} key={i} >
            <CardNews
            cover = {<img src={d.image_url} alt="" />}
            title = {d.title}
            recipeLink={d.f2f_url}
            />
          </Col>
        )
      })
      
      this.setState({
        news: data
      })
    })
}

render() {
  return (
    <div>
      <div>
        <Row gutter={16}>
          {this.state.news}
        </Row>
      </div>
    </div>
  ) 
  }
}

export default Home