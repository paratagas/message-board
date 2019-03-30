import React, { Component } from 'react';
import './Messages.scss';

export default class Messages extends Component {

  componentDidMount() {
    /*fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));*/
  }

  render() {
    return (
      <div className="messages">
        <h3><span className="badge badge-secondary">Messages</span></h3>
      </div>
    );
  }
}
