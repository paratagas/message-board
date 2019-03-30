import React, { Component } from 'react';
import './Channels.scss';

export default class Channels extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channels">
        <h3><span className="badge badge-secondary">Channels</span></h3>
      </div>
    );
  }
}
