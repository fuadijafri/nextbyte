import React, {Component} from 'react'
import { Card, Button } from 'antd';

class Chicken extends Component {
  render() {
    return (
      <Card 
          style={{ width:250 , margin:20, textAlign:"center" }}
          cover={this.props.cover}
          actions={[<a href={this.props.recipeLink}><Button type="danger">View Recipe</Button></a>]}
      >

        <Card.Meta
          title={this.props.title}
        >
        
        </Card.Meta>
      </Card> 
    )
  }
}

export default Chicken