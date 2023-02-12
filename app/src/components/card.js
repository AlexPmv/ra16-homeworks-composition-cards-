import {Component} from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
        <div className="card-body">
          <h5 className="card-title">{this.props.header}</h5>
          <p className="card-text">{this.props.text}</p>
          <a href="#" className="btn btn-primary">{this.props.button}</a>
        </div>
      </div>
    )
  }
}