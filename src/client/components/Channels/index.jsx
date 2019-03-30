import React, { Component } from 'react';
import './Channels.scss';

export default class Channels extends Component {

  componentDidMount() {
    /*fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));*/
  }

  render() {
    return (
      <div className="channels">
        <h3><span className="badge badge-secondary">Channels</span></h3>
      </div>
    );
  }
}
