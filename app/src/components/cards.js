import {Component} from 'react';
import Card from "./card"

export default class Cards extends Component {
  render() {
    return (
      <div className="cards-container">
        <Card {...this.props.cardsContent[0]}>
          <img src="/" class="card-img-top" alt="card" />
        </Card>
        <Card {...this.props.cardsContent[1]} />
      </div>
    )
  }
}