import React, { Component } from 'react';
import './Messages.scss';

export default class Messages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messages">
        <h3><span className="badge badge-secondary">Messages</span></h3>
      </div>
    );
  }
}
