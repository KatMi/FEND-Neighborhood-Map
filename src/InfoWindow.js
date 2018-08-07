import React, {Component} from 'react';

export default class InfoWindow extends Component {

  render() {
    const {info} = this.props;
    const fortName = `${info.name}`;

    return (
      <div>
        <div>
          <h2>{fortName}</h2>
          <p>Source: Wikipedia</p>
        </div>
        <img width={300} src={info.image} />
      </div>
    );
  }
}
